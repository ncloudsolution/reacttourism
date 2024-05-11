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

export const BrandNew = ({ tourDetails }) => {
  return (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={main}>
        <Container>
          {/* <Section style={logo}>
                <Img src={`${baseUrl}/static/yelp-logo.png`} />
              </Section> */}

          <Section style={content}>
            {/* <Row>
                  <Img
                    style={image}
                    width={620}
                    src={`${baseUrl}/static/yelp-header.png`}
                  />
                </Row> */}

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: "20px",
                    borderBottom: "4px solid #eab308",
                  }}
                >
                  New Order Received
                </Heading>
                {/* <Heading
                      as="h2"
                      style={{
                        fontSize: 26,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      We noticed a recent login to your Yelp account.
                    </Heading> */}
                {/**IDENTITY DETAILS**/}
                <Text style={{ ...paragraph, marginTop: 30 }}>
                  <b>Customer Name : </b>
                  {tourDetails.customerName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Customer Email : </b>
                  {tourDetails.customerEmail}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Mobile No : </b>
                  {tourDetails.customerMobileNo}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Whatsapp No : </b>
                  {tourDetails.customerWhatsappMobileNo}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>NIC / Passport No : </b>
                  {tourDetails.customerNicPassport}
                </Text>

                {/**FLIGHT DETAILS**/}
                <Text style={{ ...paragraph, marginTop: 20 }}>
                  <b>Flight No : </b>
                  {tourDetails.customerFlightNo}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Arrival Date : </b>
                  {tourDetails.arrivalDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Arrival Time : </b>
                  {tourDetails.arrivalTime}
                </Text>
                {tourDetails.cusDisplayName != "" && (
                  <Text style={{ ...paragraph, marginTop: -15 }}>
                    <b>Board Name : </b>
                    {tourDetails.cusDisplayName}
                  </Text>
                )}

                {/**JOURNEY DETAILS**/}
                <Text style={{ ...paragraph, marginTop: 20 }}>
                  <b>Origin : </b>
                  {tourDetails.origin}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Destination : </b>
                  {tourDetails.destination}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Start Date : </b>
                  {tourDetails.startDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Start Time : </b>
                  {tourDetails.startTime}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Return Date : </b>
                  {tourDetails.returnDate}
                </Text>
                {tourDetails.returnTime && (
                  <Text style={{ ...paragraph, marginTop: -15 }}>
                    <b>Return Time : </b>
                    {tourDetails.returnTime}
                  </Text>
                )}
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Distance : </b>
                  {tourDetails.distance}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Duration : </b>
                  {tourDetails.duration}
                </Text>

                {/**PRICING SECTION**/}
                <Text style={{ ...paragraph, marginTop: 20 }}>
                  <b>Selected Vehical : </b>
                  {tourDetails.vehicleType}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>No.of Passengers : </b>
                  {tourDetails.noOfPassengers}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Luggage Count : </b>
                  {tourDetails.customerLuggageCount}
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>Vehical Price: </b>
                  {tourDetails.converedCurrencySymbol}{" "}
                  {tourDetails.convertedPrice}
                </Text>
                {tourDetails.boardShow != 0 && (
                  <Text style={{ ...paragraph, marginTop: -15 }}>
                    <b>Board Show: </b>
                    {tourDetails.converedCurrencySymbol}{" "}
                    {(
                      tourDetails.boardShow * tourDetails.conversionRate
                    ).toFixed(2)}
                  </Text>
                )}

                {tourDetails.highwayExit &&
                  tourDetails.highwayExit !== "None" &&
                  tourDetails.highwayCharge !== "No any Charge" && (
                    <Text style={{ ...paragraph, marginTop: -15 }}>
                      <b>Highway Charges: </b>
                      {tourDetails.converedCurrencySymbol}{" "}
                      {(
                        tourDetails.highwayCharge * tourDetails.conversionRate
                      ).toFixed(2)}
                    </Text>
                  )}

                {tourDetails.highwayExit !== "None" && (
                  <Text style={{ ...paragraph, marginTop: -15 }}>
                    <b>Higway Exit : </b>
                    {tourDetails.highwayExit}
                  </Text>
                )}

                {/**TOTAL SECTION**/}

                <Text style={{ ...paragraph, marginTop: 20 }}>
                  <b>Total Price : </b>
                  {tourDetails.converedCurrencySymbol} {""}
                  {tourDetails.totalPrice}
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <span
                    style={{
                      backgroundColor: "#eab308",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <b>Total Price in LKR : </b>
                    <span>{`Rs. ${tourDetails.totalPriceInLkr}`}</span>{" "}
                  </span>
                </Text>

                {/* <Text
                      style={{
                        color: "rgb(0,0,0, 0.5)",
                        fontSize: 14,
                        marginTop: -5,
                      }}
                    >
                      *Approximate geographic location based on IP address:
                      {tourDetails.converedCurrencySymbol}
                    </Text> */}

                <Text
                  style={{
                    fontSize: 18,
                    color: "rgb(0,0,0, 0.5)",
                    marginTop: 40,
                  }}
                >
                  Connect The Customer
                </Text>

                {/* <Text style={{ ...paragraph, marginTop: -5 }}>
                      If this wasn't you or if you have additional questions, please
                      see our support page.
                    </Text> */}

                <Row style={{ ...boxInfos, paddingTop: "0" }}>
                  {/* <Column style={containerButton} colSpan={2}> */}
                  <Button
                    style={{ ...button, margin: "0px 10px 20px 0px" }}
                    href={`mailto:${tourDetails.customerEmail}`}
                  >
                    Email
                  </Button>
                  <Button
                    style={{ ...button, backgroundColor: "#075e54" }}
                    href={`https://wa.me/${tourDetails.customerWhatsappMobileNo}`}
                  >
                    WhatsApp
                  </Button>
                  {/* </Column> */}
                </Row>
              </Column>
            </Row>
          </Section>

          {/* <Section style={containerImageFooter}>
                <Img
                  style={image}
                  width={620}
                  src={`${baseUrl}/static/yelp-footer.png`}
                />
              </Section> */}

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.yelp.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default BrandNew;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
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
