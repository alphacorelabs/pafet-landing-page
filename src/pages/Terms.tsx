import { Box, Container, Text, VStack, Heading, Stack } from "@chakra-ui/react";
import ContainerLayout from "../ui/layouts/ContainerLayout";

function Terms() {
  return (
    <Box>
      {/* Hero Section */}
      <Stack w="full" justify="start" align="start" pt="6rem" pb={["2rem", "2rem", "3rem"]}>
        <ContainerLayout>
          <VStack w="full" justify="center" align="center" gap="20px" py={["40px", "40px", "60px"]}>
            <Heading fontSize={[36, 36, 56]} fontWeight={600} lineHeight="120%" textAlign="center" letterSpacing={["-1%", "-1%", "-2%"]}>
              Terms of Service
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
          {/* 1. ACCEPTANCE OF TERMS */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              1. ACCEPTANCE OF TERMS
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              By accessing, downloading, or using the Pafet mobile application, website, or any of our services, you acknowledge that you
              have read, understood, and agree to be bound by these Terms of Service ("Terms" or "Agreement"). These Terms constitute a
              legally binding agreement between you and Pafet Inc. ("Pafet," "we," "us," or "our").
            </Text>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              If you do not agree to any provision of these Terms, you must not access or use our services. Your continued use of our
              services after any modification to these Terms constitutes your acceptance of such modifications.
            </Text>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              These Terms apply to all users of our services, including visitors who access or use our platform. By using Pafet, you
              represent that you have the legal capacity to enter into this Agreement.
            </Text>
          </VStack>

          {/* 2. DESCRIPTION OF SERVICE */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              2. DESCRIPTION OF SERVICE
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              Pafet is a financial technology platform specifically designed for Nigerian freelancers, creators, and remote workers who need
              to manage international payments and currency conversions efficiently. Our comprehensive suite of services includes:
            </Text>

            {/* 2.1 USD Account Management */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.1 USD Account Management
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                We provide you with a dedicated USD account that enables you to receive payments from international clients directly in US
                Dollars.
              </Text>
            </VStack>

            {/* 2.2 Currency Conversion */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.2 Currency Conversion
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                We offer real-time currency conversion from USD to Nigerian Naira at transparent, competitive exchange rates. Our conversion
                rates are updated continuously based on market conditions, and we clearly display all applicable fees before you confirm any
                conversion transaction.
              </Text>
            </VStack>

            {/* 2.3 Virtual USD Card */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.3 Virtual USD Card
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                We provide virtual USD cards that enable you to make online purchases and payments in US Dollars. These cards are designed
                for digital transactions and can be used on international e-commerce platforms, subscription services, and other online
                merchants that accept USD payments.
              </Text>
            </VStack>

            {/* 2.4 Invoice Generation */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.4 Invoice Generation
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                Our platform includes tools for creating and sending professional invoices to your international clients. These invoices can
                be customized with your details, project information, and payment terms, helping you maintain a professional relationship
                with your clients while ensuring timely payments.
              </Text>
            </VStack>

            {/* 2.5 Withdrawal Services */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                2.5 Withdrawal Services
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                We enable you to withdraw your converted Naira funds directly to your Nigerian bank account. Additionally, we offer USDC
                withdrawal options for users who prefer to maintain their funds in a stable digital currency format.
              </Text>
            </VStack>
          </VStack>

          {/* 3. ELIGIBILITY AND ACCOUNT REQUIREMENTS */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              3. ELIGIBILITY AND ACCOUNT REQUIREMENTS
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              To use Pafet, you must be at least 18 years of age and possess the legal capacity to enter into binding agreements under
              Nigerian law. By using our services, you represent and warrant that you meet these age and capacity requirements.
            </Text>

            {/* 3.1 Age and Legal Capacity */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.1 Age and Legal Capacity
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                You must be at least 18 years old and have the legal capacity to enter into binding agreements under Nigerian law.
              </Text>
            </VStack>

            {/* 3.2 Residency Requirements */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.2 Residency Requirements
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                Our services are currently available exclusively to residents of Nigeria. You must provide a valid Nigerian address and be
                physically present in Nigeria when creating your account and conducting transactions.
              </Text>
            </VStack>

            {/* 3.3 Account Security Responsibilities */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                3.3 Account Security Responsibilities
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                You are responsible for creating a strong, unique password for your account, enabling and maintaining two-factor
                authentication, and immediately reporting any suspicious transactions or security concerns.
              </Text>
            </VStack>
          </VStack>

          {/* 4. USER CONDUCT AND PROHIBITED ACTIVITIES */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              4. USER CONDUCT AND PROHIBITED ACTIVITIES
            </Heading>

            {/* 4.1 Prohibited Activities */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                4.1 Prohibited Activities
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
                You expressly agree not to use Pafet for any of the following prohibited activities:
              </Text>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                • Fraud, forgery, or identity theft
                <br />
                • Engaging in transactions that lack legitimate economic purpose
                <br />
                • Attempting to manipulate exchange rates or transaction fees
                <br />• Any illegal activities under Nigerian or international law
              </Text>
            </VStack>

            {/* 4.2 Compliance Monitoring */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                4.2 Compliance Monitoring
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                We employ sophisticated monitoring systems to detect unusual or suspicious activity patterns. These systems help us maintain
                platform security and comply with regulatory requirements.
              </Text>
            </VStack>
          </VStack>

          {/* 5. FEES AND PRICING STRUCTURE */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              5. FEES AND PRICING STRUCTURE
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              At Pafet, we believe in transparent, competitive pricing that provides clear value to freelancers, creators, and remote
              workers. All fees are clearly displayed before you confirm any transaction, and we do not charge hidden fees or surprise
              charges.
            </Text>

            {/* 5.1 Exchange Rate Policy */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                5.1 Exchange Rate Policy
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                Our USD to Naira conversion rates are based on real-time interbank exchange rates with a transparent markup that covers our
                operational costs and regulatory compliance requirements.
              </Text>
            </VStack>

            {/* 5.2 Fee Changes and Notifications */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                5.2 Fee Changes and Notifications
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                We reserve the right to modify our fee structure with at least 30 days advance notice for any fee increases. You will be
                notified through email, in-app notifications, and website updates.
              </Text>
            </VStack>
          </VStack>

          {/* 6. TRANSACTION LIMITS AND CONTROLS */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              6. TRANSACTION LIMITS AND CONTROLS
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              To ensure security, comply with regulatory requirements, and manage risk, we impose certain limits on account activities.
              These limits are designed to accommodate the typical needs of freelancers and creators while maintaining platform security.
            </Text>

            {/* 6.1 Standard Transaction Limits */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                6.1 Standard Transaction Limits
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                Transaction limits may be dynamically adjusted based on account verification level, transaction history, and risk
                assessment.
              </Text>
            </VStack>
          </VStack>

          {/* 7. SERVICE AVAILABILITY AND MAINTENANCE */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              7. SERVICE AVAILABILITY AND MAINTENANCE
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              Our platform is designed to be available 24/7, allowing you to access your account, view transaction history, and perform
              certain activities at any time. However, some services may have specific availability windows.
            </Text>

            {/* 7.1 Scheduled Maintenance */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                7.1 Scheduled Maintenance
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                We perform regular system maintenance to ensure optimal performance, security, and reliability. You will receive advance
                notification of scheduled maintenance that may affect service availability.
              </Text>
            </VStack>
          </VStack>

          {/* 8. ACCOUNT TERMINATION AND CLOSURE */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              8. ACCOUNT TERMINATION AND CLOSURE
            </Heading>

            {/* 8.1 Voluntary Account Closure */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                8.1 Voluntary Account Closure
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                You may close your Pafet account at any time by submitting a closure request through the mobile application or by contacting
                our customer support team.
              </Text>
            </VStack>

            {/* 8.2 Involuntary Account Suspension */}
            <VStack w="full" justify="start" align="start" gap="16px">
              <Heading fontSize={[20, 20, 22]} fontWeight={600} lineHeight="130%" letterSpacing="-0.5%">
                8.2 Involuntary Account Suspension
              </Heading>
              <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600" pl="20px">
                We reserve the right to suspend or terminate your account immediately if you breach any provision of these Terms, engage in
                prohibited activities, or pose a risk to platform security.
              </Text>
            </VStack>
          </VStack>

          {/* 9. DISCLAIMERS AND LIMITATIONS OF LIABILITY */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              9. DISCLAIMERS AND LIMITATIONS OF LIABILITY
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              Pafet services are provided "as-is" and "as available" without warranties of any kind. We disclaim all warranties and are not
              responsible for losses resulting from exchange rate fluctuations, third-party service failures, or other factors beyond our
              control.
            </Text>
          </VStack>

          {/* 10. DISPUTE RESOLUTION */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              10. DISPUTE RESOLUTION
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              These Terms are governed by Nigerian law. We encourage users to resolve disputes through our internal resolution process
              before pursuing legal action. Contact our customer support team or legal@usepafet for dispute resolution.
            </Text>
          </VStack>

          {/* 11. CHANGES TO TERMS OF SERVICE */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              11. CHANGES TO TERMS OF SERVICE
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              We reserve the right to modify these Terms at any time. Your continued use of Pafet services after the effective date of any
              changes constitutes acceptance of the modified Terms.
            </Text>
          </VStack>

          {/* 12. CONTACT INFORMATION */}
          <VStack w="full" justify="start" align="start" gap="20px">
            <Heading fontSize={[24, 24, 28]} fontWeight={600} lineHeight="130%" letterSpacing="-1%">
              12. CONTACT INFORMATION
            </Heading>

            <Text fontSize={[16, 16, 18]} fontWeight={400} lineHeight="160%" color="grey.600">
              For questions, concerns, or support related to these Terms of Service, contact us at legal@usepafet
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default Terms;
