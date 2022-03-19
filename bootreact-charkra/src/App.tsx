import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import SidebarWithHeader from "./components/GSideBar";
import HomeBodyCallToActionWithIllustration from "./components/homeBody";
import GFooterLargeWithAppLinksAndSocial from "./components/GFooter";
import { Routes, Route } from "react-router-dom";
import GBasicStatistics from "./components/GStatistics";
import CryptoExRate from "./components/CryptoExRate";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        {/*HEADER*/}
        <SidebarWithHeader>

          {/*BODY dynamic based on url*/}
          <Routes>
            <Route path="/" element={<HomeBodyCallToActionWithIllustration />} />
            <Route path="/trending" element={<GBasicStatistics />} />
            <Route path="/exrate" element={<CryptoExRate />}/>
          </Routes>

        </SidebarWithHeader>

        {/*FOOTER*/}
        <GFooterLargeWithAppLinksAndSocial />
      </Grid>
    </Box>
  </ChakraProvider>
)
