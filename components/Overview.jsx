import React from 'react'


import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Avatar, Box, Badge } from '@chakra-ui/react'
import Link from 'next/link'
import ChartOne from './Charts/ChartOne'
import ChartTwo from './Charts/ChartTwo'
import ChartThree from './Charts/ChartThree'
import ChartFour from './Charts/ChartFour'
import TableFour from './Tables/TableFour'
import TableOne from './Tables/TableOne'
import TableTwo from './Tables/TableTwo'


export default function Overview() {
  return (
    <>
       <SimpleGrid columns={{sm: 1, md: 2, lg:2}} spacingX='20px'  spacingY='180px'>
  <Box height='80px'>
  <div class="amx-auto mb-10 overflow-hidden rounded-lg border bg-white">
        <p class="mb-6 p-3 text-center text-blue-700 text-lg font-medium">Orders Overview</p>
        <table class="w-full">
          <thead>
            <td class="text-center font-semibold text-gray-400 text-sm">Order ID</td>
            <td class="text-center font-semibold text-gray-400 text-sm">Type </td>
            <td class="text-center font-semibold text-gray-400 text-sm">Date</td>
            <td class="text-center font-semibold text-gray-400 text-sm">Price</td>
          </thead>
          <tbody>
            <tr>
              <td class="border-b py-2 text-center text-xs">1234</td>
              <td class="border-b py-2 text-center text-xs"> <Badge colorScheme='blue'>Cash</Badge></td>
              <td class="border-b py-2 text-center text-xs">21-03-24</td>
              <td class="border-b py-2 text-center text-xs"><button class="text-xs text-black">$20</button></td>
            </tr>
            <tr>
              <td class="border-b py-2 text-center text-xs">1234</td>
              <td class="border-b py-2 text-center text-xs"> <Badge colorScheme='blue'>Cash</Badge></td>
              <td class="border-b py-2 text-center text-xs">21-03-24</td>
              <td class="border-b py-2 text-center text-xs"><button class="text-xs text-black">$20</button></td>
            </tr>
            <tr>
              <td class="border-b py-2 text-center text-xs">1234</td>
              <td class="border-b py-2 text-center text-xs"> <Badge colorScheme='blue'>Cash</Badge></td>
              <td class="border-b py-2 text-center text-xs">21-03-24</td>
              <td class="border-b py-2 text-center text-xs"><button class="text-xs text-black">$20</button></td>
            </tr>
            <tr>
              <td class="border-b py-2 text-center text-xs">1234</td>
              <td class="border-b py-2 text-center text-xs"> <Badge colorScheme='blue'>Cash</Badge></td>
              <td class="border-b py-2 text-center text-xs">21-03-24</td>
              <td class="border-b py-2 text-center text-xs"><button class="text-xs text-black">$20</button></td>
            </tr>
          </tbody>
        </table>
       
      </div>
  </Box>
  <Box bg='tomato' height='80px'>
  <ChartTwo/>
  </Box>
 
</SimpleGrid>

    </>
  )
}
