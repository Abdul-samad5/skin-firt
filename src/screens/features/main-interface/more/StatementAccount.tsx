import { View, Text } from 'react-native'
import React from 'react'
import AppButton from '@/src/components/button'
import InputField from '@/src/components/input-field'
import { StackNavigationProps } from '@/src/shared'
import { SelectItem } from '@/src/components/select'

const StatementAccount = ({ navigation }: StackNavigationProps) => {
    const [selectedLoan, setSelectedLoan] = React.useState("");
    return (
        <View className='flex-1 w-full h-full p-5 bg-white'>
            <Text className='text-[#424242] font-medium text-base'>Choose a timeframe for your statement and select a format you want it in</Text>
            <View className="pt-5">
                <InputField
                    label="Start Date"
                    InputType="default"
                    placeholder="DD/MM/YY"
                    isRequired
                    marginTop={1}
                />
            </View>
            <View className="pt-5">
                <InputField
                    label="End Date"
                    InputType="default"
                    placeholder="DD/MM/YY"
                    isRequired
                    marginTop={1}
                />
            </View>
            <View className="pt-5">
                <SelectItem title="Format"
                    selectedValue={selectedLoan}
                    onValueChange={setSelectedLoan}
                    items={[
                        { label: "Start-Up Capital", value: "Start-Up Capital" },
                        { label: "Expansion", value: "Expansion" },
                        { label: "Inventories", value: "Inventories" },
                    ]}
                />
            </View>
            <View className="absolute bottom-5 left-5 right-5">
                <AppButton
                    title="Get"
                    backgroundColor="#00E5AE"
                    action={() => navigation.navigate("SuccessfullyRequest")}
                    fontWeight="700"
                    width="100%"
                />
            </View>
        </View>
    )
}

export default StatementAccount