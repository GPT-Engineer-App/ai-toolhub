import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Select, Box, SimpleGrid, Badge, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaFilter, FaPlus } from "react-icons/fa";

const tools = [
  // Sample data
  { id: 1, name: "AI Content Generator", category: "Content Creation", pricing: "Free", launchDate: "2023-10-01", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMENvbnRlbnQlMjBHZW5lcmF0b3J8ZW58MHx8fHwxNzE2MDMxOTQxfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "AI Image Enhancer", category: "Image/Video Generation", pricing: "Paid", launchDate: "2023-09-15", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMEltYWdlJTIwRW5oYW5jZXJ8ZW58MHx8fHwxNzE2MDMxOTQzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  // Add more sample tools as needed
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [sort, setSort] = useState("");

  const filteredTools = tools.filter((tool) => {
    return (search === "" || tool.name.toLowerCase().includes(search.toLowerCase())) && (category === "" || tool.category === category) && (pricing === "" || tool.pricing === pricing);
  });

  const sortedTools = filteredTools.sort((a, b) => {
    if (sort === "launchDate") {
      return new Date(b.launchDate) - new Date(a.launchDate);
    }
    return 0;
  });

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack justifyContent="space-between">
          <Text fontSize="3xl" fontWeight="bold">
            AI Tools Directory
          </Text>
          <IconButton aria-label="Submit Tool" icon={<FaPlus />} size="lg" />
        </HStack>

        <HStack spacing={4}>
          <Input placeholder="Search tools..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <Select placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Content Creation">Content Creation</option>
            <option value="Analysis">Analysis</option>
            <option value="Image/Video Generation">Image/Video Generation</option>
            {/* Add more categories as needed */}
          </Select>
          <Select placeholder="Pricing" value={pricing} onChange={(e) => setPricing(e.target.value)}>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </Select>
          <Select placeholder="Sort By" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="launchDate">Launch Date</option>
          </Select>
          <IconButton aria-label="Filter" icon={<FaFilter />} size="lg" />
        </HStack>

        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Just Launched
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {sortedTools.map((tool) => (
              <Box key={tool.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src={tool.image} alt={tool.name} mb={4} />
                <Text fontSize="xl" fontWeight="bold">
                  {tool.name}
                </Text>
                <Badge colorScheme="teal" mb={2}>
                  {tool.category}
                </Badge>
                <Text>{tool.pricing}</Text>
                <Text fontSize="sm" color="gray.500">
                  Launched on {new Date(tool.launchDate).toLocaleDateString()}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
