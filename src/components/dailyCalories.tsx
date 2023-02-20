import {
    HStack,
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Input
  } from '@chakra-ui/react'
//   import { useState } from "react"

  const DailyCalories = (props: any) => {
    console.log(props)

    // const [weekCals, setWeekCals] = useState({
    //     monCals: 0,
    //     tueCals: 0,
    //     wedCals: 0,
    //     thuCals: 0,
    //     friCals: 0,
    //     satCals: 0,
    //     sunCals: 0,
    // })

    const updateCals = (e: any) => {
        if (e) {
            if (e.target.value <= props.tdee) {
                props.setWeekCals({
                    ...props.weekCals,
                    [e.target.name]: e.target.value
                })
            } else {
                let leftoverCals = ((props.tdee*7) - e.target.value)/7
                props.setWeekCals({
                    monCals: e.target.name === "monCals" ? e.target.value : leftoverCals,
                    tueCals: e.target.name === "tueCals" ? e.target.value : leftoverCals,
                    wedCals: e.target.name === "wedCals" ? e.target.value : leftoverCals,
                    thuCals: e.target.name === "thuCals" ? e.target.value : leftoverCals,
                    friCals: e.target.name === "friCals" ? e.target.value : leftoverCals,
                    satCals: e.target.name === "satCals" ? e.target.value : leftoverCals,
                    sunCals: e.target.name === "sunCals" ? e.target.value : leftoverCals
                })

            }
        }
    }

  return (
    <HStack p={12}>
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Mon</Heading>
            <Text>
                Total Calories
            </Text>
            <Input name="monCals" value={ props.monCals || "" } onChange={(e) => updateCals(e)}/>
            </Stack>
        </CardBody>
    </Card>
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Tue</Heading>
            <Text>
                Total Calories
            </Text>
            <Input name="tueCals" value={ props.tueCals || "" }onChange={(e) => updateCals(e)}/>
            </Stack>
        </CardBody>
    </Card>
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Wed</Heading>
            <Text>
                Total Calories
            </Text>
            <Input name="wedCals" value={ props.wedCals || "" } onChange={(e) => updateCals(e)}/>
            </Stack>
        </CardBody>
    </Card>
    <Card maxW='sm'>
        <CardBody>
        <Stack mt='6' spacing='3'>
            <Heading size='md'>Thu</Heading>
            <Text>
                Total Calories
            </Text>
            <Input name="thuCals" value={ props.thuCals || "" } onChange={(e) => updateCals(e)}/>
            </Stack>
        </CardBody>
    </Card>
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Fri</Heading>
            <Text>
                Total Calories
            </Text>
            <Input name="friCals" value={ props.friCals || "" } onChange={(e) => updateCals(e)}/>
            </Stack>
        </CardBody>
    </Card>
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Sat</Heading>
            <Text>
                Total Calories
            </Text>
            <Input name="satCals" value={ props.satCals || "" } onChange={(e) => updateCals(e)}/>
            </Stack>
        </CardBody>
    </Card>
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Sun</Heading>
            <Text>
                Total Calories
            </Text>
            <Input name="sunCals" value={ props.sunCals || "" } onChange={(e) => updateCals(e)}/>
            </Stack>
        </CardBody>
    </Card>
    </HStack>
  )
}

export default DailyCalories;