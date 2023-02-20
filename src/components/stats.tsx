import {
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
    VStack
  } from '@chakra-ui/react'

  const Stats = (props: any) => {
    console.log(props)
  return (

    <StatGroup>
    <VStack p={8}>
    <Stat>
        <StatLabel>Calories per day</StatLabel>
        <StatNumber>{props.tdee}</StatNumber>
    </Stat>

    <Stat>
        <StatLabel>Calories per week</StatLabel>
        <StatNumber>{props.tdee*7}</StatNumber>
    </Stat>
    </VStack>
    </StatGroup>
  )
}

export default Stats;