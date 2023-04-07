import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import "../App.css";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        id="talk-box"
        pr={2}
      >
        <Box className="talk-div">
          <Text fontSize="4xl" fontFamily="Work sans">
            <i style={{ "margin-right": "10px" }} class="fa-brands fa-rocketchat"></i>
            TALK <span style={{ "color": "#bfbfaa" }}>-Air</span>


          </Text>
        </Box>

      </Box>
      <Box
        id="login-signup"
        w="100%"
        p={4}>

        <Tabs isFitted variant="unstyled" >
          <TabList mb="1em">
            <Tab _selected={{ color: 'white', bgColor: '#dbcaca69' }} >Login</Tab>
            <Tab _selected={{ color: 'white', bgColor: '#dbcaca69' }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container >
  );
}

export default Homepage;
