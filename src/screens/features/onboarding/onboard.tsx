import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import onboard1 from "@/assets/images/illus 2.png";
import onboard2 from "@/assets/images/illus 3.png";
import onboard3 from "@/assets/images/illus4.png";
import onboard4 from "@/assets/images/illus1 1.png";
import onboard5 from "@/assets/images/illus 5 1.png";
import AppButton from '@/src/components/button';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import OnboardingSlide from '@/src/components/onboard';
const Onboard = () => {
    const navigation = useNavigation<any>();

    return (
        <View className='flex-1 w-full h-full bg-white p-5'>

            <Swiper
                showsButtons={false}
                loop={true}
                autoplay={true}
                autoplayTimeout={3}
                showsPagination={true}
                paginationStyle={{
                    bottom: 50
                }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#D9D9D9',
                }}
                activeDotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#00E5AE',
                }}
            >
                <View>
                    <OnboardingSlide
                        title="Enjoy Fast And Reliable Transfer With Your Love Ones"
                        image={onboard1}
                    />
                </View>
                <View>
                    <OnboardingSlide
                        title="Save With Paivia To  Ensure 100% Secured Funds"
                        image={onboard2}
                    />
                </View>
                <View>
                    <OnboardingSlide
                        title="Seamless Transaction At Your Comfort"
                        image={onboard3}
                    />
                </View>
                <View>
                    <OnboardingSlide
                        title="Make All Online Payment With Paivia App"
                        image={onboard4}
                    />
                </View>
                <View>
                    <OnboardingSlide
                        title="Get Loan Of Any Amount: Student, Business and Personal Loan"
                        image={onboard5}
                    />
                </View>
            </Swiper>


            <View className=' flex items-center justify-center'>
                <AppButton
                    title={"Open a New Account"}
                    backgroundColor="#00E5AE"
                    action={() => { navigation.navigate('Register') }}
                    style={styles.button}
                    fontWeight='600'
                    width="100%"
                />
                <AppButton
                    title={"Already have an account, "}
                    span='Sign in'
                    spanColor='#00E5AE'
                    backgroundColor="#ffffff"
                    action={() => { navigation.navigate('Login') }}
                    color='#000000'
                    borderColor='#00E5AE'
                    borderWidth={1}
                    style={styles.button}
                    width="100%"
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        // marginBottom: 10,
    },
});

export default Onboard