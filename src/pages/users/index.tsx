import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="20"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="16" />}
            >
              Criar novo usuario
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Th>
                <Th>Usuario</Th>
                <Th>Data de cadastro</Th>
                <Th width="6"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td p="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Ferreira</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabriel.ferreira@nextpage.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>24 de abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td p="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Ferreira</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabriel.ferreira@nextpage.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>24 de abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td p="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Ferreira</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabriel.ferreira@nextpage.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>24 de abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
