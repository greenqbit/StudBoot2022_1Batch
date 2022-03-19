import {ReactNode, useEffect, useState} from 'react';
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue
} from "@chakra-ui/react";
import axios from "axios";
import {
    FiDollarSign,
    FiLoader,
} from "react-icons/fi";
import {
    FaBitcoin
} from "react-icons/fa";

/**
 * {
 *  rates: {
 *      btc: {
 *          name: "Bitcoin",
 *          unit: "BTC",
 *          value: 1,
 *          type: "crypto"
 *      },
 *  }
 *  }
 */

interface ExValue {
    name: string
    unit: string
    value: number
    type: 'crypto' | 'fiat'
}
//use this for rates:
type ExRateRates = {
    [key in string] : ExValue
}

//use this for response.data
type ExRate = {
    rates: Record<string, ExValue>
}

export default function CryptoExRate() {

    const [exchangeRate, setExchangeRate] = useState<ExRate>()

    function fetchExRate() {
        axios.get('https://api.coingecko.com/api/v3/exchange_rates')
            .then((response) => {
                console.log(1, 'exRate data: ', response.data)
                setExchangeRate(response.data)
            })
    }

    //async await => NO THEN :) without using then method we can fetch data which look like non-blocking
    async function fetchExRateAsyncAwait() {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/exchange_rates')
            console.log(1, 'exRate data: ', response.data)
            setExchangeRate(response.data)

            //return response //only when you want to make this method as a promise
        } catch (e) {
            //handle error
        }
    }

    useEffect(() => {
        // fetchExRate()
        fetchExRateAsyncAwait()
    }, []) //[] 1st time, componentDidMount

    //deps: only use, props or states
    //UseEffect order of usages is serial Top bottom
    useEffect(() => {
        console.log(2, 'exchangeRate updates...or modified..')
    }, [exchangeRate]) //[] 1st time, componentDidUpdate

    console.log(1, 'state exchangeRate: ', exchangeRate)

    //Learning: How to convert Json Object {} to Array type []
    const DiamondComp = () => <FaBitcoin size={'3em'} />
    const DollarComp = () => <FiDollarSign size={'3em'} />
    const exRatesComp = exchangeRate?.rates && Object.keys(exchangeRate.rates).map((rateKey, index) => {
        const rateValue = exchangeRate.rates[rateKey]
        return (
            <StatsCard key={index + rateValue.name}
                title={`${rateValue.name} : ${rateValue.unit}`}
                stat={rateValue.value}
                icon={rateValue.type === 'crypto' ? <DiamondComp /> : <DollarComp /> }
            />
        )
    })
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Todays Cypto exchange rate based on coinbase
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                {!exRatesComp &&
                    <div style={{marginLeft: '600px'}}>
                        <FiLoader size={'6em'}/>
                    </div>
                }
                {exRatesComp}
            </SimpleGrid>
        </Box>
    )
}

interface StatsCardProps {
    title: string;
    stat: string | number;
    icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}