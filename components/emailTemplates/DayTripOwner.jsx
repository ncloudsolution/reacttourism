import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const DayTripOwner = ({ dayTripDetails }) => {
  return (
    <Html>
      <Head />
      <Preview>Order Details</Preview>
      <Body style={main}>
        <Container style={{ maxWidth: "680px", backgroundColor: "#FDFDFD" }}>
          {/* <Section style={logo}>
              <Img src={`${baseUrl}/static/yelp-logo.png`} />
            </Section> */}

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              paddingBottom: 10,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | 118/ 5 st Joseph street, Grandpass, Colombo 14, Sri Lanaka
            | www.tourbookingsrilanka.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default DayTripOwner;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const section = {
  marginBottom: 20,
};

const paragraph = {
  fontSize: 14,
  margin: 0,
  color: "black",
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
  width: "100%",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
