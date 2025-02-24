import { ChakraProvider, Box, Container, Heading, Text, VStack, HStack, Icon, useColorMode, IconButton, Flex, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin, FaReact, FaNode, FaStripe, FaDiscord } from 'react-icons/fa'
import { SiNextdotjs, SiOpenai, SiVercel } from 'react-icons/si'

//Hello

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  const ProjectCard = ({ title, description, features, isAward }) => (
    <MotionBox
      variants={itemVariants}
      p={[4, 5, 6]}
      borderRadius="xl"
      boxShadow="xl"
      bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(45, 55, 72, 0.9)'}
      backdropFilter="blur(10px)"
      _hover={{ 
        transform: 'translateY(-5px)', 
        transition: 'all 0.2s',
        boxShadow: '2xl'
      }}
    >
      <Flex justify="space-between" align="center" mb={2} flexWrap="wrap" gap={2}>
        <Heading size="md">{title}</Heading>
        {isAward && (
          <Badge colorScheme="yellow" p={1} borderRadius="md" fontSize="xs">
            🏆 Hackathon 2nd Place
          </Badge>
        )}
      </Flex>
      <Text mb={3} fontSize="sm">{description}</Text>
      <VStack align="start" spacing={1}>
        {features.map((feature, index) => (
          <Text key={index} fontSize="xs" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
            • {feature}
          </Text>
        ))}
      </VStack>
    </MotionBox>
  )

  const backgroundGradient = colorMode === 'light' 
    ? 'linear-gradient(135deg, #6B46C1 0%, #3182CE 100%)'
    : 'linear-gradient(135deg, #1A365D 0%, #2D3748 100%)'

  return (
    <ChakraProvider>
      <Box
        minH="100vh"
        bgGradient={backgroundGradient}
        position="relative"
        overflow="hidden"
      >
        {/* Animated background elements - reduced size and quantity */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.1"
          zIndex="0"
        >
          {[...Array(3)].map((_, i) => (
            <MotionBox
              key={i}
              position="absolute"
              borderRadius="full"
              bg={colorMode === 'light' ? 'white' : 'blue.500'}
              initial={{ 
                x: Math.random() * 100 - 50 + '%',
                y: Math.random() * 100 - 50 + '%',
                scale: Math.random() * 1.5 + 0.5
              }}
              animate={{
                x: [Math.random() * 100 - 50 + '%', Math.random() * 100 - 50 + '%'],
                y: [Math.random() * 100 - 50 + '%', Math.random() * 100 - 50 + '%'],
                scale: [Math.random() * 1.5 + 0.5, Math.random() * 1.5 + 0.5],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              w={['80px', '120px', '180px']}
              h={['80px', '120px', '180px']}
              filter="blur(30px)"
            />
          ))}
        </Box>

        {/* Main content - adjusted for better fit */}
        <Container maxW="container.md" py={[4, 6, 8]} position="relative" centerContent>
          <Flex justify="flex-end" w="full" mb={4}>
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="solid"
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              _hover={{
                bg: colorMode === 'light' ? 'gray.100' : 'gray.600',
              }}
              aria-label="Toggle color mode"
              size="sm"
            />
          </Flex>

          <MotionFlex
            as="main"
            direction="column"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            w="full"
          >
            {/* Hero Section - reduced spacing */}
            <VStack spacing={4} align="center" mb={10}>
              <MotionBox
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Heading 
                  as="h1" 
                  size={["xl", "2xl"]} 
                  bgGradient={colorMode === 'light' 
                    ? 'linear-gradient(to right, #ffffff, #e2e8f0)' 
                    : 'linear-gradient(to right, #90CDF4, #63B3ED)'}
                  bgClip="text"
                  textAlign="center"
                >
                  Samuel Michnik
                </Heading>
              </MotionBox>
              <Text 
                fontSize={["md", "lg"]} 
                color={colorMode === 'light' ? 'white' : 'gray.300'}
                textAlign="center"
              >
                Software Developer | Web Technologies Specialist
              </Text>
              <Text 
                color={colorMode === 'light' ? 'white' : 'gray.300'}
                textAlign="center"
                maxW="600px"
                fontSize={["sm", "md"]}
              >
                I create innovative solutions that combine modern web frameworks with AI to solve real-world problems.
              </Text>
              <HStack spacing={4}>
                <MotionBox whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Icon 
                    as={FaGithub} 
                    boxSize={6} 
                    cursor="pointer" 
                    color={colorMode === 'light' ? 'white' : 'gray.300'}
                  />
                </MotionBox>
                <MotionBox whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Icon 
                    as={FaLinkedin} 
                    boxSize={6} 
                    cursor="pointer"
                    color={colorMode === 'light' ? 'white' : 'gray.300'}
                  />
                </MotionBox>
              </HStack>
            </VStack>

            {/* Projects Section - grid layout on desktop */}
            <VStack spacing={6} align="stretch">
              <Heading 
                as="h2" 
                size="lg" 
                mb={6}
                textAlign="center"
                color={colorMode === 'light' ? 'white' : 'gray.300'}
              >
                Featured Projects
              </Heading>

              <Flex 
                direction={["column", "column", "row"]} 
                wrap="wrap" 
                gap={4} 
                justify="center"
              >
                <Box flex={["1 1 100%", "1 1 100%", "1 1 31%"]}>
                  <ProjectCard
                    title="ClarityAI"
                    description="A sophisticated task management platform powered by artificial intelligence."
                    features={[
                      "Built with Next.js and OpenAI API",
                      "Secure payment processing via Stripe",
                      "Deployed and optimized on Vercel",
                      "Smart task organization using AI"
                    ]}
                  />
                </Box>
                <Box flex={["1 1 100%", "1 1 100%", "1 1 31%"]}>
                  <ProjectCard
                    title="MoodBot"
                    description="An intelligent Discord bot that promotes positive online communities."
                    features={[
                      "Smart message moderation system",
                      "Automatic toxic content detection",
                      "Conflict de-escalation capabilities",
                      "Award-winning project"
                    ]}
                    isAward={true}
                  />
                </Box>
                <Box flex={["1 1 100%", "1 1 100%", "1 1 31%"]}>
                  <ProjectCard
                    title="Ingredibud"
                    description="Your personal AI cooking assistant that makes meal planning effortless."
                    features={[
                      "Customized recipe recommendations",
                      "Support for dietary restrictions",
                      "Cuisine and ingredient filtering",
                      "Intelligent substitution suggestions"
                    ]}
                  />
                </Box>
              </Flex>
            </VStack>

            {/* Skills Section - more compact layout */}
            <VStack spacing={4} align="stretch" mt={8}>
              <Heading 
                as="h2" 
                size="lg" 
                mb={6}
                textAlign="center"
                color={colorMode === 'light' ? 'white' : 'gray.300'}
              >
                Technical Expertise
              </Heading>
              <Flex wrap="wrap" gap={3} justify="center">
                {[
                  { icon: SiNextdotjs, label: 'Next.js' },
                  { icon: FaReact, label: 'React' },
                  { icon: SiOpenai, label: 'OpenAI' },
                  { icon: SiVercel, label: 'Vercel' },
                  { icon: FaStripe, label: 'Stripe' },
                  { icon: FaDiscord, label: 'Discord' },
                  { icon: FaNode, label: 'Node.js' },
                ].map((skill, index) => (
                  <MotionBox
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <VStack
                      p={3}
                      borderRadius="lg"
                      bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(45, 55, 72, 0.9)'}
                      backdropFilter="blur(10px)"
                      boxShadow="md"
                      spacing={1}
                      width={["70px", "80px"]}
                      height={["70px", "80px"]}
                      justify="center"
                      _hover={{
                        boxShadow: 'lg',
                      }}
                    >
                      <Icon as={skill.icon} boxSize={6} />
                      <Text fontSize="xs">{skill.label}</Text>
                    </VStack>
                  </MotionBox>
                ))}
              </Flex>
            </VStack>
          </MotionFlex>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App