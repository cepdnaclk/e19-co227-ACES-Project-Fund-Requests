import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import StudentHome from "./Pages/StudentHome";
import AdminHome1 from "./Pages/AdminHome1";
import AdminHome2 from "./Pages/AdminHome2";
import AdminHome3 from "./Pages/AdminHome3";
<<<<<<< HEAD
=======
import Admin from "./Pages/Admin";
// //import AdminHome3

>>>>>>> 93cab690cf31ae898b8dabd174be5e13dead6869

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Conditionally open the modal when the user is not logged in
  const isUserLoggedIn = false; // Replace with logic to check if the user is logged in
  useEffect(() => {
    if (!isUserLoggedIn) {
      onOpen();
    }
  }, [isUserLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route
          index
          element={
            <>
              <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="sm" isCentered>
                <ModalOverlay 
                  bg='blackAlpha.300'
                 backdropFilter='blur(3px) '
                />
                <ModalContent>
                  <ModalHeader>ACES Project Fund Requests</ModalHeader>
                  <ModalBody>
                    {/* Insert your Google login button or authentication component here */}
                    {/* You can use an external authentication library for Google OAuth */}
                    <Button colorScheme="blue">Login with Google</Button>
                  </ModalBody>
                </ModalContent>
              </Modal>
              <StudentHome />
            </>
          }
        />
        <Route path="/admin1" element={
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
      <AdminHome1 />    
    } 
      />
=======
        <Route index element={<StudentHome />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin1" element={<AdminHome1 />} />
>>>>>>> 93cab690cf31ae898b8dabd174be5e13dead6869
        <Route path="/admin2" element={<AdminHome2 />} />
        <Route path="/admin3" element={<AdminHome3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
