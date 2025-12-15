import { Box, Container, Text, VStack, Heading, Stack } from "@chakra-ui/react";
import ContainerLayout from "../ui/layouts/ContainerLayout";

function PrivacyPolicy() {
  return (
    <Box>
      {/* Hero Section */}
      <Stack w="full" justify="start" align="start" pt="6rem" pb={["2rem", "2rem", "3rem"]}>
        <ContainerLayout>
          <VStack w="full" justify="center" align="center" gap="20px" py={["40px", "40px", "60px"]}>
            <Heading fontSize={[36, 36, 56]} fontWeight={600} lineHeight="120%" textAlign="center" letterSpacing={["-1%", "-1%", "-2%"]}>
              Privacy Policy
            </Heading>

            <Text fontSize={[14, 14, 16]} fontWeight={500} lineHeight="160%" color="grey.500" textAlign="center">
              Last Updated: August 2, 2025
            </Text>
          </VStack>
        </ContainerLayout>
      </Stack>

      {/* Content Section */}
      <Container maxW="container.lg" py={["2rem", "2rem", "3rem"]}>
        <VStack w="full" justify="start" align="start" gap="40px">
          {/* Introduction */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              1. INTRODUCTION
            </Heading>

            <VStack w="full" justify="start" align="start" gap="16px">
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                Pafet, Inc. ("Pafet," "we," "us," or "our") is a financial technology platform that provides innovative financial services
                to freelancers, creators, and remote workers. We are committed to protecting and respecting the privacy of our users ("you",
                "your", "user") when using any of our Services.
              </Text>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                This Privacy Policy explains how we collect, use, process, store, and protect your personal information when you use our
                mobile application, website, and financial services (collectively, the "Service"). We also explain your rights regarding
                your personal information and how you can exercise them.
              </Text>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                By creating an account with Pafet or using our Service, you acknowledge that you have read, understood, and agree to be
                bound by this Privacy Policy.
              </Text>
            </VStack>
          </VStack>

          {/* Information We Collect */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              2. INFORMATION WE COLLECT
            </Heading>

            {/* 2.1 Personal Information You Provide to Us */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.1 Personal Information You Provide to Us
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                When you register for a Pafet account or use our services, we collect personal information that you voluntarily provide to
                us. This information is essential for providing our services and complying with regulatory requirements.
              </Text>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Identity Information:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  We collect your full legal name as it appears on your government-issued identification, date of birth, place of birth,
                  nationality, and gender. This information is required to verify your identity to comply with regulatory requirements.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Contact Information:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  We collect your email address, phone number (including mobile number), residential address, and mailing address if
                  different from your residential address. We use this information to communicate with you about your account, send
                  important notifications, and provide customer support.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Financial Information:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  In compliance with anti-money laundering requirements, we collect details about your bank accounts (including account
                  numbers, routing numbers, and bank names), source of income, estimated annual income, employment information, and
                  transaction history. This information helps us provide our services while ensuring compliance with anti-money laundering
                  regulations.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Documentation:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  As our service is designed for freelancers, creators, and remote workers, we may collect information about your
                  profession, skills, and the nature of your freelance work. This helps us provide tailored services and ensure compliance
                  with relevant regulations for professional service providers.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Professional Information:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  We collect information about your profession, skills, and the nature of your freelance work. This helps us provide
                  tailored services and ensure compliance with relevant regulations for professional service providers.
                </Text>
              </VStack>
            </VStack>

            {/* 2.2 Information We Collect Automatically */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.2 Information We Collect Automatically
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                When you use our Service, we automatically collect certain information about your device and how you interact with our
                platform.
              </Text>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Device Information:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  We collect information about the device you use to access our Service, including device type, model, operating system and
                  version, browser type and version, unique device identifiers, mobile network information, and device settings. This
                  information helps us optimize our Service for your device and detect potential security threats.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Usage Information:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  We collect information about how you use our Service, including the features you use, the actions you take, the time and
                  duration of your activities, frequency of use, and pages or screens you view. This information helps us improve our
                  Service and provide a better user experience.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Location Information:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  With your explicit consent, we may collect precise location information from your device through GPS, Bluetooth, WiFi
                  signals, and cell tower data. We use this information for fraud prevention, regulatory compliance, and to provide
                  location-based services. You can disable location sharing in your device settings at any time.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Log Information:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  Our servers automatically record information when you use our Service, including IP address, access times, browser type,
                  language preferences, referring website addresses, and pages viewed. This information is used for system administration,
                  security monitoring, and service improvement.
                </Text>
              </VStack>
            </VStack>

            {/* 2.3 Biometric and Authentication Data */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.3 Biometric and Authentication Data
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                For enhanced security and identity verification, we may collect biometric information including facial recognition data
                during the account verification process. This biometric data is processed to verify your identity against your
                government-issued identification and prevent fraud. We use advanced encryption and security measures to protect this
                sensitive information.
              </Text>
            </VStack>

            {/* 2.4 Information from Third Parties */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.4 Information from Third Parties
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We may receive information about you from third-party sources to enhance our services and ensure regulatory compliance.
              </Text>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Identity Verification Services:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  We work with licensed identity verification providers to confirm your identity and address information. These services may
                  provide additional data points to verify the information you have provided to us.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Financial Data Providers:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  We may receive information about your financial history, creditworthiness, and transaction patterns from authorized
                  financial data providers to assess risk and prevent fraud.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Marketing Partners:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  With your consent, we may receive information from marketing partners to provide you with relevant offers and improve our
                  services.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="12px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Public Records:
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  We may access publicly available information and records to verify your identity and comply with regulatory requirements.
                </Text>
              </VStack>
            </VStack>
            {/* 3. HOW WE USE YOUR INFORMATION */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3. HOW WE USE YOUR INFORMATION
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We use your personal information for the following purposes, based on legitimate business interests, regulatory compliance,
                and with your consent where required.
              </Text>
            </VStack>
            {/* 3.3 Transaction Processing and Monitoring */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.3 Transaction Processing and Monitoring
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We use your information to process, authorize, and settle your transactions. This includes converting currencies at
                real-time rates, facilitating international money transfers, monitoring transactions for fraud and compliance, maintaining
                transaction records as required by law, and providing transaction history and statements.
              </Text>
            </VStack>
            {/* 3.4 Security and Fraud Prevention */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.4 Security and Fraud Prevention
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                Protecting your account and funds is our top priority. We use your information to detect and prevent fraudulent activities,
                monitor for unauthorized access to your account, implement security measures such as multi-factor authentication,
                investigate security incidents, and maintain the overall security of our platform.
              </Text>
            </VStack>
            {/* 3.5 Customer Support and Communication */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.5 Customer Support and Communication
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We use your contact information to provide customer support, respond to your inquiries and requests, send important
                notifications about your account or our services, provide updates about changes to our policies or terms, and communicate
                about new features or promotional offers (with your consent).
              </Text>
            </VStack>
            {/* 3.6 Legal and Regulatory Compliance */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.6 Legal and Regulatory Compliance
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We are required by law to share certain information with regulatory authorities and may be compelled to share information in
                legal proceedings.
              </Text>
            </VStack>
            {/* 3.7 Business Transfers */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.7 Business Transfers
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                In the event of a merger, acquisition, sale of assets, or other business transaction, your information may be transferred to
                the acquiring entity. We will notify you of any such transfer and ensure that your information continues to be protected
                under equivalent privacy standards.
              </Text>
            </VStack>
            {/* 3.8 Consent-Based Sharing */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.8 Consent-Based Sharing
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide
                personalized services.
              </Text>
            </VStack>
            {/* 3.9 Data Security and Protection */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.9 Data Security and Protection
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We implement comprehensive security measures to protect your personal information from unauthorized access, disclosure,
                alteration, and destruction.
              </Text>
            </VStack>
            {/* 3.10 Technical Safeguards */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.10 Technical Safeguards
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                Network Security: Our systems are protected by firewalls, intrusion detection systems, and continuous monitoring to prevent
                unauthorized access and detect potential security threats.
              </Text>
            </VStack>
            {/* 3.11 Operational Safeguards */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.11 Operational Safeguards
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We maintain secure backups of your information to ensure service continuity and data recovery in case of system failures.
                Backup data is encrypted and stored in geographically diverse locations with appropriate security measures.
              </Text>
            </VStack>
            {/* 3.12 Data Backup and Recovery */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.12 Data Backup and Recovery
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                While your account is active, we retain your personal information to provide ongoing services. After account closure, we may
                retain certain information for up to seven (7) years to comply with financial services regulations and for potential dispute
                resolution.
              </Text>
            </VStack>
            {/* 3.13 Transaction Records */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.13 Transaction Records
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We retain marketing-related information until you withdraw consent or request deletion, subject to any legal requirements
                for retention.
              </Text>
            </VStack>
            {/* 3.14 Security and Fraud Prevention Data */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.14 Security and Fraud Prevention Data
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We may retain information related to security incidents and fraud prevention for longer periods to protect our platform and
                users from ongoing threats.
              </Text>
            </VStack>
            {/* 3.15 Your Privacy Rights */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.15 Your Privacy Rights
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                Under applicable data protection laws, you have several rights regarding your personal information:
              </Text>
            </VStack>
            {/* 3.16 Right of Access */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.16 Right of Access
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                You have the right to request access to the personal information we hold about you. We will provide you with a copy of your
                information and details about how it is being processed within 30 days of your request.
              </Text>
            </VStack>
            {/* 3.17 Right to Rectification */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.17 Right to Rectification
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                If any of your personal information is inaccurate or incomplete, you have the right to request correction. We will update
                your information promptly and notify any third parties who received the incorrect information.
              </Text>
            </VStack>
            {/* 3.18 Right to Restrict Processing */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.18 Right to Restrict Processing
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                Adequacy Decisions: Transfers to countries recognized by Nigerian authorities as providing adequate data protection.
              </Text>
            </VStack>
            {/* 3.18 Right to Restrict Processing */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.19 Right to Data Portability
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                You have the right to receive your personal information in a structured, commonly used format and to transmit it to another
                service provider where technically feasible.
              </Text>
            </VStack>
            {/* 3.20 Right to Object */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.20 Right to Object
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                You can object to processing of your personal information for direct marketing purposes at any time. You may also object to
                processing based on legitimate interests.
              </Text>
            </VStack>
            {/* 3.21 Changes to This Privacy Policy */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.21 Changes to This Privacy Policy
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or
                other factors. We will notify you of any material changes through:
              </Text>
            </VStack>
            {/* 3.22 Contact Information and Data Protection Officer */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.22 Contact Information and Data Protection Officer
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data processing practices, please
                contact us at legal@usepafet
              </Text>
            </VStack>

            {/* 3.23 Account Deletion Request */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.23 Account Deletion Request
              </Heading>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                If you wish to delete your Pafet account and associated personal data, you can do so by following these steps:
              </Text>

              <VStack w="full" justify="start" align="start" gap="12px" pl="20px">
                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Step 1: Prepare Your Request
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  Compose an email from the email address associated with your Pafet account. Include your full name, account email address,
                  and phone number linked to your account for verification purposes.
                </Text>

                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Step 2: Send Deletion Request
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  Send your account deletion request to legal@usepafet with the subject line "Account Deletion Request". Clearly state that
                  you wish to permanently delete your account and all associated personal data.
                </Text>

                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Step 3: Verification Process
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  Our team will verify your identity to ensure the security of your account. You may receive a follow-up email requesting
                  additional verification information or confirmation of your deletion request.
                </Text>

                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Step 4: Account Review and Settlement
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  Ensure all pending transactions are completed and withdraw any remaining balance from your account. If there are any
                  outstanding issues, our team will contact you to resolve them before proceeding with the deletion.
                </Text>

                <Text fontSize={[16, 16, 18]} fontWeight={600} lineHeight="160%" color="grey.700">
                  Step 5: Deletion Confirmation
                </Text>
                <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                  Once your request is processed (typically within 30 days), you will receive a confirmation email notifying you that your
                  account and personal data have been permanently deleted from our systems, subject to legal retention requirements.
                </Text>
              </VStack>

              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                Please note that certain information may be retained for legal, regulatory, or legitimate business purposes as outlined in
                our data retention policy. After deletion, your account cannot be recovered, and you will need to create a new account if
                you wish to use Pafet services in the future.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;
