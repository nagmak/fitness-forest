import { useState } from "react"
import {
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    HStack,
    VStack,
    Select,
    Button
  } from '@chakra-ui/react'
import heightConstants from '../utils/heightConstants';
import { bmrCalculator, feetNumToReadableFeet, readableFeetToNum } from '../utils/calculatorUtils';
import { activityConstants } from '../utils/activityConstants';
import { TDEEData } from "../utils/interfaces";
import Stats from "./stats";
import { tdeeCalculator } from "../utils/calculatorUtils";
import DailyCalories from "./dailyCalories";

 const TdeeCalculator = () => {
    const [TDEE, setTDEE] = useState(0);
    const [formObj, setFormObj] = useState<TDEEData>({
        sex: 'female',
        age: 0,
        weight: 0,
        height: 0,
        activity: ''
    });

    const [weekCals, setWeekCals] = useState({
        monCals: 0,
        tueCals: 0,
        wedCals: 0,
        thuCals: 0,
        friCals: 0,
        satCals: 0,
        sunCals: 0,
    })

    const [sex, setSex] = useState('female');

    const updateForm = (e: any) => {
        if (e) {
            setFormObj({
                ...formObj,
                [e.target.name]: e.target.value
            })
        }
    }

  return (
    <>
<VStack spacing={2}>
    <FormControl>
    <HStack spacing={2} p={12}>
    <FormLabel>Gender</FormLabel>
    <RadioGroup name="sex" value={sex || "female"} defaultValue="female" onChange={(e) => setSex(e)}>
    <HStack spacing='24px'>
      <Radio variant="radioStyle" value='male'>Male</Radio>
      <Radio variant="radioStyle" value='female'>Female</Radio>
    </HStack>
  </RadioGroup>
    <FormLabel>Age</FormLabel>
        <Input maxWidth="4rem" name="age" value={ formObj.age || "" } onChange={(e) => updateForm(e)}/>
        <FormLabel>Weight</FormLabel>
        <Input maxWidth="5rem" name="weight" value={ formObj.weight || "" } onChange={(e) => updateForm(e)}/>
        <FormLabel width="6rem">Body Fat %</FormLabel>
        <Input maxWidth="4rem" name="bodyFatPercent" value={ formObj.bodyFatPercent || "" } onChange={(e) => updateForm(e)}/>
        <FormLabel>Height</FormLabel>
        <Select maxWidth="12rem" name="height" value={ formObj.height || "" } placeholder='Select height' onChange={(e) => updateForm(e)}>
            {Array.from(Array(heightConstants.length), (e, i) => {
                let feetAndInches = feetNumToReadableFeet(heightConstants[i]);
                return <option key={i}>{feetAndInches[0]}ft {feetAndInches[1]}in</option>
            })}
        </Select>
        <FormLabel>Activity</FormLabel>
        <Select maxWidth="20rem" name="activity" value={ formObj.activity || "" } placeholder='Select Activity level' onChange={(e) => updateForm(e)}>
            {activityConstants.map((objArr, i) => {
               return <option value={objArr.label} key={i}>{objArr.value}</option>
            })}
        </Select>
        <Button
            mt={4}
            colorScheme="forest"
            variant="buttonStyle"
            onClick={() => {
                let newheight = readableFeetToNum(formObj.height)
                let newFormObj = formObj
                newFormObj.height = newheight
                newFormObj.sex = sex;
                let bmr = bmrCalculator(newFormObj)
                let tdee = tdeeCalculator(bmr, newFormObj.activity)
                setTDEE(tdee)
                setWeekCals({
                    monCals: tdee,
                    tueCals: tdee,
                    wedCals: tdee,
                    thuCals: tdee,
                    friCals: tdee,
                    satCals: tdee,
                    sunCals: tdee
                })
            }}
            type='submit'
          >
            Submit
          </Button>
          </HStack>
    </FormControl>

    <VStack spacing={2}>
        { TDEE ? <Stats tdee={TDEE}></Stats>:null}
        { TDEE ? <DailyCalories 
            setWeekCals={setWeekCals} 
            tdee={TDEE} 
            monCals={weekCals.monCals} 
            tueCals={weekCals.tueCals}
            wedCals={weekCals.wedCals}
            thuCals={weekCals.thuCals}
            friCals={weekCals.friCals}
            satCals={weekCals.satCals}
            sunCals={weekCals.sunCals}
        />: null}
    </VStack>
    </VStack>
    </>
  )
}

export default TdeeCalculator;
