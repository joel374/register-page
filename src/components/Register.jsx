import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"

const Register = () => {
  const [inputText, setInputText] = useState("")
  const [inputEmail, setInputText2] = useState("")
  const [inputPass, setInputText3] = useState("")
  // Show Pass
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Radio
  const [gender, setGender] = useState("")

  return (
    <>
      <Box
        width={"500px"}
        mx={"auto"}
        mt={"30px"}
        border={"1px"}
        borderStyle={"solid"}
        borderColor={"black"}
        borderRadius={"8px"}
        padding={"50px"}
      >
        <Grid
          columns={1}
          spacingX="40px"
          spacingY="20px"
          display="grid"
          gridGap={2}
          gridAutoFlow="row dense"
        >
          <Box height="auto">
            <Text fontSize={"35px"} fontWeight={"bold"}>
              Register
            </Text>
          </Box>
          <Box height="80px">
            <FormControl>
              <FormLabel>Ussername</FormLabel>
              <Input
                placeholder="Ussername"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
              />
            </FormControl>
          </Box>
          <Box height="80px">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                value={inputEmail}
                onChange={(event) => setInputText2(event.target.value)}
              />
            </FormControl>
          </Box>
          <Box height="80px">
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={inputPass}
                onChange={(event) => setInputText3(event.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  bgColor="#0BC6EA"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box height="80px">
            <RadioGroup>
              <Text fontWeight={"medium"}>Gender</Text>
              <Stack direction="row">
                <Radio
                  label="Male"
                  checked={gender === "Male"}
                  value="Male"
                  onChange={() => setGender("Male")}
                >
                  Male
                </Radio>
                <Radio
                  label="Female"
                  checked={gender === "Female"}
                  value="Female"
                  onChange={() => setGender("Female")}
                >
                  Female
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box height="40px" margin={"auto"}>
            <Button onClick={onOpen} bgColor="#0BC6EA">
              Register
            </Button>
          </Box>
        </Grid>
      </Box>

      {/* Modal */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Ussername:{inputText}</Text>
            <Text>Email:{inputEmail}</Text>
            <Text>Password:{inputPass}</Text>
            <Text>Gender:{gender}</Text>
          </ModalBody>
          <ModalFooter>
            <Button bgColor="#0BC6EA" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Register
