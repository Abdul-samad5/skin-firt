import { View, Text } from 'react-native'
import React from 'react'
import Assets from '@/assets/svg/Assets'
import { Icon } from 'react-native-paper'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
const ChatUs = () => {
    const hidePromotionalBanner = `
        (function() {
            function hideElements() {
                const style = document.createElement('style');
                style.innerHTML = \`
                    .tawk-branding { display: none !important; }
                    .tawk-button-small { display: none !important; }
                    iframe[title="chat widget"] { min-height: 100vh !important; }
                \`;
                document.head.appendChild(style);
            }

            // Try immediately
            hideElements();
            
            // Also try after a delay to ensure DOM is loaded
            setTimeout(hideElements, 1000);
            
            // And observe DOM changes
            const observer = new MutationObserver(hideElements);
            observer.observe(document.body, { childList: true, subtree: true });
        })();
    `;
    return (
        <View className='flex-1 w-full h-full bg-white'>

            <WebView source={{ uri: 'https://tawk.to/chat/67e5b2a695c1e8190c96f995/1inck3ng5' }}
                injectedJavaScript={hidePromotionalBanner}
                onLoad={() => console.log('WebView loaded')}
            />
        </View>
    )
}

export default ChatUs


{/* <View className='bg-[#00E5AE] pt-10 p-5 rounded-br-3xl rounded-bl-3xl'>
                <View className="flex flex-row items-center  w-32">
                    <Text className='text-white text-3xl font-bold'>Hi, Paivia</Text>
                    <Icon source={Assets.hand} size={24} />
                </View>
                <Text className='text-white text-3xl font-bold pt-1'>How can we help?</Text>
                <View className='mt-3 bg-white rounded-2xl p-5'>
                    <View className="flex flex-row justify-between border-b border-[#D9D9D9] pb-5">
                        <Text className='text-[#001D56] font-medium text-base'>Messages</Text>
                        <Icon source={Assets.msg} size={24} />
                    </View>
                    <View className="flex flex-row justify-between pt-5">
                        <Text className='text-[#001D56] font-medium text-base'>Help</Text>
                        <Icon source={Assets.hlp} size={24} />
                    </View>
                </View>
            </View>
            <View className='mt-5 p-5'>
                <View className='rounded-2xl bg-white p-5 shadow-lg'
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 4, // Required for Android
                    }}>
                    <View className="flex flex-row items-center justify-between">
                        <View className='flex flex-col gap-2'>
                            <Text className='text-[#001D56] font-bold text-base'>Send us a message</Text>
                            <Text className='text-[#AAA8A8] font-semibold text-base'>We typically reply in a few minutes</Text>
                        </View>
                        <Ionicons name="send" size={24} color="black" />
                    </View>
                </View>
                <View className='rounded-2xl bg-white p-5 shadow-lg mt-5'
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 4, // Required for Android
                    }}>
                    <View className="flex flex-row items-center justify-between">

                        <Text className='text-[#001D56] font-bold text-base'>Search for help</Text>


                        <FontAwesome name="search" size={24} color="black" />
                    </View>
                </View>

            </View> */}