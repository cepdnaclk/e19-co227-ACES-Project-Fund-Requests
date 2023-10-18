import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useEffect

import {
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Link,
} from "@chakra-ui/react";

import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

import StudentHome from "./Pages/StudentHome";
import Admin from "./Pages/Admin";
import AdminHome1 from "./Pages/AdminHome1";
import AdminHome2 from "./Pages/AdminHome2";
import AdminHome3 from "./Pages/AdminHome3";
import axios from "axios";

import { DUserTokenInterface } from "./models/TokenMoodel";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userToken, setUserToken] = useState<DUserTokenInterface | null>(null);

  useEffect(() => {
    if (userToken == null) {
      onOpen();
    } else {
      onClose();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                size="sm"
                isCentered
              >
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(3px) " />
                <ModalContent>
                  <ModalHeader
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    ACES Project Fund Requests
                  </ModalHeader>
                  <ModalBody
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text pb="3" fontSize="sm">
                      You need to login with your eng email
                    </Text>
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);

                        var decodedUserToken: DUserTokenInterface = jwt_decode(
                          credentialResponse.credential!
                        );

                        setUserToken(decodedUserToken);

                        console.log(decodedUserToken);

                        onClose();
                      }}
                      onError={() => {
                        onOpen();
                        console.log("Login Failed");
                      }}
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
              <StudentHome userToken={userToken} />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            //   <>
            //   <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="sm" isCentered>
            //     <ModalOverlay
            //       bg='blackAlpha.300'
            //       backdropFilter='blur(3px) '
            //     />
            //     <ModalContent>
            //       <ModalHeader>Modal Title</ModalHeader>
            //       <ModalBody>
            //         {/* Insert your Google login button or authentication component here */}
            //         {/* You can use an external authentication library for Google OAuth */}
            //         <Button colorScheme="blue">Login with Google</Button>
            //       </ModalBody>
            //     </ModalContent>
            //   </Modal>

            // </>
            <Admin />
          }
        />
        <Route path="/admin1" element={<AdminHome1 />} />
        <Route path="/admin2" element={<AdminHome2 />} />
        <Route path="/admin3" element={<AdminHome3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
