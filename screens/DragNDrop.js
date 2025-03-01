import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, Animated, PanResponder, Dimensions, Alert, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import React, { useState, useRef, useEffect } from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import { Itim_400Regular } from "@expo-google-fonts/itim";
import { db } from "../firebaseSetup";
import { onValue, ref, get } from "firebase/database";

const ProgressBar = ({ progress }) => {
    return (
    <View style={{
        marginBottom : '5%',
        alignItems: 'center'
        }}>
        <View style={{
            width: '90%',
            height: 5,
            backgroundColor: '#C9C0FF',
            borderRadius: 5,
            overflow: 'hidden',
            marginTop : '5%',
        }}>
        <View style={{ 
            width: `${progress}%`,
            height : '100%',
            backgroundColor : '#9381FF',
        }}/>
      </View>
      </View>
    );
};

// Draggable block component that can be used in both the tray and the drop area
const DraggableBlock = ({ id, text, onDragStart, onDragEnd, position, dragEnabled = true, onLongPress, inDropZone = false, slotIndex = null }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [isDragging, setIsDragging] = useState(false);
    
    // Initialize with specified position or default
    useEffect(() => {
        if (position) {
            pan.setValue({ x: 0, y: 0 }); // Reset to origin position
        }
    }, [position]);
    
    const panResponder = React.useMemo(() => {
        if (!dragEnabled) return {};
        
        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                setIsDragging(true);
                onDragStart(id, slotIndex);
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
                pan.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: Animated.event(
                [null, { dx: pan.x, dy: pan.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (e, gestureState) => {
                setIsDragging(false);
                pan.flattenOffset();
                
                // Get the current position for drop calculations
                const currentPosition = {
                    x: gestureState.moveX,
                    y: gestureState.moveY
                };
                
                onDragEnd(id, currentPosition, slotIndex);
                
                // Reset position after drag end for items in drop zone
                if (inDropZone) {
                    pan.setValue({ x: 0, y: 0 });
                }
            }
        });
    }, [dragEnabled, id, onDragStart, onDragEnd, onLongPress, slotIndex]);

    return (
        <Animated.View
            style={[{
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
                zIndex: isDragging ? 999 : 1,
                opacity: isDragging ? 0.8 : 1,
                position: inDropZone ? 'absolute' : 'relative',
                left: inDropZone ? position?.x || 0 : 0,
                top: inDropZone ? position?.y || 0 : 0,
                width: 150,  // Fixed width for consistent sizing
            }]}
            {...(dragEnabled ? panResponder.panHandlers : {})}
        >
            <View style={{
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFEEDE',
                padding: '5%',
                borderRadius: 10,
                marginBottom: '5%',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: isDragging ? 5 : 2 },
                shadowOpacity: isDragging ? 0.3 : 0.1,
                shadowRadius: isDragging ? 6 : 2,
                elevation: isDragging ? 10 : 3,
            }}>
                <Text style={{
                    fontFamily: 'Itim_400Regular',
                    fontSize: 15,
                    color: '#1D3557'
                }}>{text}</Text>
            </View>
        </Animated.View>
    );
};

// Drop area with specific slots for blocks
const DropArea = ({ droppedItems, onRearrange, onRemoveItem }) => {
    const [fontsLoaded] = useFonts({
        Itim_400Regular,
    });
    
    // Create fixed positions for 4 slots with reduced vertical spacing
    const slotPositions = [
        { x: 20, y: 50 },
        { x: 20, y: 120 },
        { x: 20, y: 190 },
        { x: 20, y: 260 },
        { x: 20, y: 330 }
    ];
    
    // Handle drag start within the drop area
    const handleDragStart = (id, slotIndex) => {
        console.log(`Dragging item ${id} from slot ${slotIndex}`);
    };
    
    // Handle drag end within the drop area
    const handleDragEnd = (id, position, slotIndex) => {
        onRearrange(id, position, slotIndex);
    };
    
    // Handle long press to remove an item
    const handleLongPress = (id) => {
        onRemoveItem(id);
    };
    
    return (
        <View style={{
            width: '100%',
            marginTop: '45%',
            height: '80%',
            backgroundColor: 'rgba(201, 192, 255, 0.15)',
            position: 'absolute',
            flex: 1,
            alignItems: 'center',
        }}>
            <Text style={{
                color: '#7567CE',
                fontSize: 24,
                textAlign: 'center',
                fontFamily: 'Itim_400Regular',
                marginTop: '2%',
                position: 'absolute',
                top: 0
            }}>TOPIC</Text>
            
            {droppedItems.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{
                        color: '#7567CE',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Itim_400Regular',
                    }}>DRAG</Text>
                    <Text style={{
                        color: '#7567CE',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Itim_400Regular',
                    }}>ELEMENTS</Text>
                    <Text style={{
                        color: '#7567CE',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Itim_400Regular',
                    }}>HERE TO</Text>
                    <Text style={{
                        color: '#7567CE',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily: 'Itim_400Regular',
                    }}>CREATE</Text>
                </View>
            ) : (
                <View style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    paddingTop: '15%'
                }}>
                    {/* Show empty slot indicators */}
                    {slotPositions.map((pos, index) => {
                        const isOccupied = droppedItems.some(item => item.slotIndex === index);
                        
                        if (!isOccupied) {
                            return (
                                <View key={`slot-${index}`} style={{
                                    position: 'absolute',
                                    left: pos.x,
                                    top: pos.y,
                                    width: 150,
                                    height: 60,
                                    borderWidth: 2,
                                    borderStyle: 'dashed',
                                    borderColor: '#7567CE',
                                    borderRadius: 10,
                                    opacity: 0.5,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: '#7567CE',
                                        fontFamily: 'Itim_400Regular',
                                    }}>Slot {index + 1}</Text>
                                </View>
                            );
                        }
                        return null;
                    })}
                    
                    {/* Show dropped items */}
                    {droppedItems.map((item) => (
                        <DraggableBlock
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            position={slotPositions[item.slotIndex]}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            onLongPress={handleLongPress}
                            inDropZone={true}
                            slotIndex={item.slotIndex}
                            dragEnabled={true} // Always enable dragging for items in drop zone
                        />
                    ))}
                </View>
            )}
        </View>
    );
};

const BlocksTray = ({ blocks, onDragStart, onDragEnd, isDragging }) => {
    const [expanded, setExpanded] = useState(false);
    const [widthAnim] = useState(new Animated.Value(50));

    const toggleTray = () => {
        Animated.timing(widthAnim, {
            toValue: expanded ? 50 : 285,
            duration: 200,
            useNativeDriver: false,
        }).start();

        setExpanded(!expanded);
    };

    return (
        <TouchableOpacity onPress={toggleTray} activeOpacity={0.8} style={{ zIndex: 1000 }}>
        <Animated.View style={{
            width: widthAnim,
            height: '78%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            alignContent: 'space-evenly',
            backgroundColor: '#9381FF',
            alignSelf: 'flex-end',
            marginTop: '5%',
            padding: '4%',
            zIndex: 1000,
            opacity: isDragging ? 0.7 : 1, // Reduce opacity when dragging
        }}>
            {!expanded && (
                <View style={{
                    alignItems: 'center',
                }}>
                    <Image source={require('../assets/blocks.png')} style={{
                        marginBottom: '100%'
                    }}/>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        P
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        U
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        L
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        L
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                         T
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        O
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular'
                    }}>
                         O
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        P
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        E
                    </Text>
                    <Text style={{
                        color: '#FAF9FF',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular',
                    }}>
                        N
                    </Text>
                </View>
            )}
            
            {expanded && (
                <>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={require('../assets/blocks.png')} style={{
                    }}/>
                    <Text style={{
                        color: '#FAF9FF',
                        textAlign: 'center',
                        marginLeft: '20%',
                        fontSize: 18,
                        fontFamily: 'Itim_400Regular'
                    }}>Element blocks</Text>
                </View>
                <View style={{
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: '5%',
                }}>
                    {blocks.map((block) => block.available && (
                        <View key={block.id} style={{ margin: 5, width: '45%' }}>
                            <DraggableBlock 
                                id={block.id}
                                text={block.text} 
                                onDragStart={(id) => onDragStart(id)}
                                onDragEnd={(id, position) => onDragEnd(id, position)}
                            />
                        </View>
                    ))}
                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    flexGrow: 1
                }}>
                    <Text style={{
                        color: '#FAF9FF',
                        textAlign: 'center',
                        fontSize: 12,
                        fontFamily: 'Itim_400Regular',
                    }}>Drag elements belonging to the same category!</Text>
                </View>
                </>
            )}
        </Animated.View>
        </TouchableOpacity>
    );
};

export default function DragNDrop() {
    const [blocks,setBlocks] = useState([])
    const [correctOrder,setCorrectOrder] = useState([])
    const [title,setTitle] = useState(null)
    const [fontsLoaded] = useFonts({
        PatrickHandSC_400Regular,
        Itim_400Regular,
    });
    
    async function getData() {
        const dragRef = ref(db, `/dragNdrop/0`);
        const snapshot = await get(dragRef);
        if (snapshot.exists()) {
            const values = snapshot.val();


            console.log("values : ", values.options)
            let tempBlocks = [];
            values.options.map((item,i)=>{
                tempBlocks.push({ id: i, text: item, available: true })
            })
            setBlocks(tempBlocks)
            setCorrectOrder(values.correctOrder)
            setTitle(values.title)
        }

    }

    useEffect(() => {
        getData()
    }, [])
    // Initial blocks data with availability flag
    // const [blocks, setBlocks] = useState();
    
    // Order for winning the game (in IDs)
    // const correctOrder = ['3', '1', '2', '4']; // Preamble, Fundamentals, DPSP, Amendments
    
    // Items that have been dropped into the drop area
    const [droppedItems, setDroppedItems] = useState([]);
    
    // Track if the game is won
    const [gameWon, setGameWon] = useState(false);
    
    // Track which block is being dragged
    const [activeDragId, setActiveDragId] = useState(null);
    const [activeDragSlotIndex, setActiveDragSlotIndex] = useState(null);
    
    // Track if any item is being dragged
    const [isDragging, setIsDragging] = useState(false);
    
    // Reference to drop area for position calculations
    const dropAreaRef = useRef(null);
    const [dropAreaLayout, setDropAreaLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
    
    // Create fixed positions for 4 slots with reduced vertical spacing
    const slotPositions = [
        { x: 20, y: 50 },
        { x: 20, y: 120 },
        { x: 20, y: 190 },
        { x: 20, y: 260 },
        { x: 20, y: 330 }

    ];
    
    // Measure drop area position
    const measureDropArea = () => {
        if (dropAreaRef.current) {
            dropAreaRef.current.measure((fx, fy, width, height, px, py) => {
                setDropAreaLayout({
                    x: px,
                    y: py,
                    width,
                    height
                });
            });
        }
    };
    
    useEffect(() => {
        // Measure after layout
        setTimeout(measureDropArea, 500);
    }, []);
    
    // Check if the current arrangement matches the winning order
    useEffect(() => {
        if(blocks.length>0){

            if (droppedItems.length === correctOrder.length) {
                // Sort dropped items by slot index to get current order
                const sortedItems = [...droppedItems].sort((a, b) => a.slotIndex - b.slotIndex);
                const currentOrder = sortedItems.map(item => item.id);
                const isCorrect = currentOrder.every((id, index) => id === correctOrder[index]);
                
                console.log('Current order:', currentOrder);
                console.log('Correct order:', correctOrder);
                console.log('Is correct:', isCorrect);
                
                if (isCorrect) {
                    setGameWon(true);
                    // You could trigger some win animation or message here
                } else {
                    Alert.alert(
                        'Wrong Sequence', 
                        'The sequence is incorrect. Resetting...',
                        [
                            { 
                                text: 'OK', 
                                onPress: () => {
                                    // Reset all blocks to available
                                    setBlocks(prevBlocks => 
                                        prevBlocks.map(block => ({ ...block, available: true }))
                                    );
                                    // Clear dropped items
                                    setDroppedItems([]);
                                    // Reset game won state
                                    setGameWon(false);
                                }
                            }
                        ]
                    );
                }
                
            }
        }
    }, [droppedItems,blocks]);
    
    // Helper function to find nearest slot
    const findNearestSlot = (position) => {
        // Calculate positions relative to drop area
        const adjustedSlotPositions = slotPositions.map(slot => ({
            x: slot.x + dropAreaLayout.x,
            y: slot.y + dropAreaLayout.y
        }));
        
        // Find distances to each slot
        const distances = adjustedSlotPositions.map((slot, index) => {
            const dx = position.x - slot.x;
            const dy = position.y - slot.y;
            return {
                index,
                distance: Math.sqrt(dx * dx + dy * dy)
            };
        });
        
        // Sort by distance
        distances.sort((a, b) => a.distance - b.distance);
        
        // Check if the nearest slot is already occupied
        const nearestAvailableSlot = distances.find(slot => {
            return !droppedItems.some(item => 
                item.slotIndex === slot.index && item.id !== activeDragId
            );
        });
        
        return nearestAvailableSlot ? nearestAvailableSlot.index : -1;
    };
    
    // Handle when a block starts being dragged from the blocks tray
    const handleDragStart = (id, slotIndex = null) => {
        setActiveDragId(id);
        setActiveDragSlotIndex(slotIndex);
        setIsDragging(true); // Set dragging state to true
        // Ensure we have the latest measurements
        measureDropArea();
    };
    
    // Function to swap items in slots
    const swapItemsInSlots = (draggedId, targetSlotIndex) => {
        // Find the item currently in the targetSlotIndex
        const itemInTargetSlot = droppedItems.find(item => item.slotIndex === targetSlotIndex);
        // Find the slot of the dragged item
        const draggedItem = droppedItems.find(item => item.id === draggedId);
        
        if (itemInTargetSlot && draggedItem) {
            // This is a swap operation
            const draggedSlotIndex = draggedItem.slotIndex;
            
            // Update the positions and slotIndices
            setDroppedItems(droppedItems.map(item => {
                if (item.id === draggedId) {
                    return {
                        ...item,
                        position: slotPositions[targetSlotIndex],
                        slotIndex: targetSlotIndex
                    };
                } else if (item.id === itemInTargetSlot.id) {
                    return {
                        ...item,
                        position: slotPositions[draggedSlotIndex],
                        slotIndex: draggedSlotIndex
                    };
                }
                return item;
            }));
            
            console.log(`Swapped item ${draggedId} with item ${itemInTargetSlot.id}`);
            return true;
        }
        return false;
    };
    
    // Handle when a block is dropped (either from tray or being rearranged)
    const handleDragEnd = (id, position, fromSlotIndex = null) => {
        setIsDragging(false); // Set dragging state to false
        
        // Check if the position is within the drop area
        const isInDropArea = 
            position.x >= dropAreaLayout.x &&
            position.x <= dropAreaLayout.x + dropAreaLayout.width &&
            position.y >= dropAreaLayout.y &&
            position.y <= dropAreaLayout.y + dropAreaLayout.height;
        
        console.log(`Dropped item ${id} at position:`, position);
        console.log('Is in drop area:', isInDropArea);
        console.log('Drop area layout:', dropAreaLayout);
        
        if (isInDropArea) {
            // Find the nearest slot
            const nearestSlot = findNearestSlot(position);
            console.log('Nearest slot:', nearestSlot);
            
            if (nearestSlot !== -1) {
                // If the item was dragged from another slot, handle rearrangement/swapping
                if (fromSlotIndex !== null) {
                    // Try to swap with an item in the target slot if one exists
                    const swapped = swapItemsInSlots(id, nearestSlot);
                    
                    if (!swapped) {
                        // If there was no swap (target slot was empty), just move the item
                        setDroppedItems(droppedItems.map(item => 
                            item.id === id 
                                ? { 
                                    ...item, 
                                    position: slotPositions[nearestSlot],
                                    slotIndex: nearestSlot
                                } 
                                : item
                        ));
                    }
                } else {
                    // Check if there's an item already in this slot
                    const itemInSlot = droppedItems.find(item => item.slotIndex === nearestSlot);
                    
                    if (itemInSlot) {
                        // Return the existing item to the tray
                        console.log(`Returning item ${itemInSlot.id} to tray`);
                        setBlocks(blocks.map(b => 
                            b.id === itemInSlot.id ? { ...b, available: true } : b
                        ));
                        
                        // Remove it from dropped items
                        setDroppedItems(droppedItems.filter(item => item.slotIndex !== nearestSlot));
                    }
                    
                    // Find the block and add it to dropped items
                    const block = blocks.find(b => b.id === id);
                    
                    if (block && block.available) {
                        // Mark the block as unavailable
                        setBlocks(blocks.map(b => 
                            b.id === id ? { ...b, available: false } : b
                        ));
                        
                        // Add to dropped items at the specific slot
                        setDroppedItems([...droppedItems.filter(item => item.slotIndex !== nearestSlot), {
                            id,
                            text: block.text,
                            position: slotPositions[nearestSlot],
                            slotIndex: nearestSlot
                        }]);
                    }
                }
            }
        } else if (fromSlotIndex !== null) {
            // If dragged out of the drop area, return to tray
            handleRemoveItem(id);
        }
        
        setActiveDragId(null);
        setActiveDragSlotIndex(null);
    };
    
    // Handle rearranging blocks within the drop area
    const handleRearrange = (id, position, fromSlotIndex) => {
        // Use the same drag end handler with the slot index
        handleDragEnd(id, position, fromSlotIndex);
    };
    
    // Handle removing an item from the drop area (long press)
    const handleRemoveItem = (id) => {
        // Remove from dropped items
        setDroppedItems(droppedItems.filter(item => item.id !== id));
        
        // Make available again in the blocks tray
        setBlocks(blocks.map(block => 
            block.id === id ? { ...block, available: true } : block
        ));
    };
    
    // Get window dimensions for positioning
    const windowDimensions = Dimensions.get('window');
    
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                paddingRight: 20,
                paddingLeft: 20
            }}>
                <View style={{
                    height: 60,
                    paddingTop: 10,
                    paddingBottom: 10,
                    flexDirection: "row"
                }}>
                    <Text style={{
                        fontSize: 25,
                        flex: 2,
                        color: '#232ED1',
                        fontWeight: 'bold'
                    }}>BHARAT VIDHI</Text>

                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        flexDirection: "row",
                        alignSelf: "stretch",
                        marginRight: '2%'
                    }}>
                        <Image source={require('../assets/notification.png')} />
                        <Image source={require('../assets/coins.png')} />
                        <Image source={require('../assets/profile.png')} />
                    </View>
                </View>
            </View>
            <ProgressBar progress={78}/>
            <Text style={{
                fontSize: 24,
                textAlign: 'center',
                fontFamily: 'PatrickHandSC_400Regular',
                marginBottom: '4%',
            }}>{title}</Text>
            
            {/* Game Won Message (conditionally rendered) */}
            {gameWon && (
                <View style={{
                    position: 'absolute',
                    top: windowDimensions.height * 0.4,
                    left: windowDimensions.width * 0.1,
                    width: windowDimensions.width * 0.8,
                    backgroundColor: 'rgba(147, 129, 255, 0.9)',
                    padding: 20,
                    borderRadius: 10,
                    alignItems: 'center',
                    zIndex: 1000,
                }}>
                    <Text style={{
                        fontFamily: 'PatrickHandSC_400Regular',
                        fontSize: 28,
                        color: '#FFFFFF',
                        textAlign: 'center',
                        marginBottom: 10,
                    }}>
                        Congratulations!
                    </Text>
                    <Text style={{
                        fontFamily: 'Itim_400Regular',
                        fontSize: 18,
                        color: '#FFFFFF',
                        textAlign: 'center',
                    }}>
                        You arranged the elements in the correct order!
                    </Text>
                </View>
            )}
            
            <View 
                ref={dropAreaRef} 
                style={{ 
                    width: '100%', 
                    height: '50%', 
                    position: 'absolute', 
                    marginTop: '45%' 
                }} 
                onLayout={measureDropArea} 
            />
            
            <DropArea 
                droppedItems={droppedItems} 
                onRearrange={handleRearrange}
                onRemoveItem={handleRemoveItem}
            />
            
            <BlocksTray 
                blocks={blocks} 
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                isDragging={isDragging} // Pass dragging state to control opacity
            />
            
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={{
                    alignItems: 'center', 
                    marginBottom: '15%'
                }}>
                </View>
            </ScrollView>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 15,
    },
});