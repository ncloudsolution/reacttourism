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

export const CustomTourPackageOwnerEmail = ({ customTourDetails }) => {
  return (
    <Html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Head />
      <Preview>Confirmation Email</Preview>
      <Body style={main}>
        <Container style={{ padding: "10px 20px" }}>
          <Container style={container}>
            <Section style={content}>
              {/* <Row>
                <Img
                  style={image}
                  width={620}
                  src={`${baseUrl}/static/yelp-header.png`}
                />
              </Row> */}

              <Row
                style={{
                  ...boxInfos,
                  padding: "40px 40px",
                  paddingBottom: "20px",
                  width: "680px",
                  maxwidth: "100%",
                  margin: "0 auto",
                }}
              >
                <Column>
                  <Heading
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingBottom: "20px",
                      borderBottom: "4px solid #eab308",
                      color: "black",
                      width: "100%",
                      margin: "10px auto",
                      marginBottom: 40,
                    }}
                  >
                    New Custom Tour Request
                  </Heading>

                  <Row style={{ marginTop: 20, width: "680px" }}>
                    <Column style={{ paddingRight: 0, width: 400 }}>
                      {/**JOURNEY DETAILS**/}
                      {/**msg**/}
                      <Section style={section}>
                        <Text style={paragraph}>
                          <b>Customer Name : </b>
                          {customTourDetails.customerName}
                        </Text>
                        <Text style={paragraph}>
                          <b>Customer Email : </b>
                          {customTourDetails.customerEmail}
                        </Text>
                        <Text style={paragraph}>
                          <b>Mobile No : </b>
                          {customTourDetails.customerMobileNo}
                        </Text>
                        <Text style={paragraph}>
                          <b>Whatsapp No : </b>
                          {customTourDetails.customerWhatsappNo}
                        </Text>
                        <Text style={paragraph}>
                          <b>NIC / Passport No : </b>
                          {customTourDetails.customerNicPassportNo}
                        </Text>
                      </Section>

                      <Section style={section}>
                        <Text style={paragraph}>
                          <b>Arrival Date : </b>
                          {customTourDetails.arrivalDate}
                        </Text>
                        <Text style={paragraph}>
                          <b>Arrival Time : </b>
                          {customTourDetails.arrivalTime}
                        </Text>
                        <Text style={paragraph}>
                          <b>Depature Date : </b>
                          {customTourDetails.depatureDate}
                        </Text>
                        <Text style={paragraph}>
                          <b>Depature Time : </b>
                          {customTourDetails.depatureTime}
                        </Text>
                      </Section>

                      <Section style={section}>
                        <Text style={paragraph}>
                          <b>People Count : </b>
                          {customTourDetails.noOfAdults > 1
                            ? `${customTourDetails.noOfAdults} adults`
                            : "1 adult"}{" "}
                          {customTourDetails.noOfKids === 0 && "and no kids. "}{" "}
                          {customTourDetails.noOfKids === 1 && "and 1 kid. "}{" "}
                          {customTourDetails.noOfKids > 1 &&
                            `and ${customTourDetails.noOfKids} kids. `}
                        </Text>
                        <Text style={paragraph}>
                          <b>Accomodation Type : </b>
                          {customTourDetails.selectedHotel}
                        </Text>
                        <Text style={paragraph}>
                          <b>Meal Type : </b>
                          {customTourDetails.selectedMealOption}
                        </Text>
                        <Text style={paragraph}>
                          <b>Requested Places : </b>
                          {customTourDetails.checkedPlaces.join(", ")}
                        </Text>
                      </Section>

                      <Section style={section}>
                        <Text style={paragraph}>
                          <b> Special Request : </b>
                          {customTourDetails.specialRequest
                            ? customTourDetails.specialRequest
                            : "none"}
                        </Text>
                      </Section>
                    </Column>
                    <Column style={{ paddingRight: 0, width: 280 }}>
                      {/**JOURNEY DETAILS**/}
                      {/**msg**/}
                      <Section style={section}>
                        <Row>
                          <Img
                            style={{ paddingBottom: 10, margin: "0 auto" }}
                            height={450}
                            src={"https://i.ibb.co/GdQb2QY/man.png"}
                          />
                        </Row>
                      </Section>
                    </Column>
                  </Row>

                  <Section style={section}>
                    <Text
                      style={{
                        ...paragraph,
                        fontSize: 18,
                        color: "rgb(0,0,0, 0.5)",
                        borderTop: "4px solid #eab308",
                        padding: "20px 0px",
                      }}
                    >
                      Connect The Customer
                    </Text>

                    {/* <Text style={{ ...paragraph, marginTop: -5 }}>
                    If this wasn't you or if you have additional questions, please
                    see our support page.
                  </Text> */}

                    <Row style={{ paddingTop: "0" }}>
                      {/* <Column style={containerButton} colSpan={2}> */}
                      <Button
                        style={{ ...button }}
                        href={`mailto:${customTourDetails.customerEmail}`}
                      >
                        Email
                      </Button>
                      <Button
                        style={{
                          ...button,
                          backgroundColor: "#075e54",
                          margin: "0px 0px 0px 5px",
                        }}
                        href={`https://wa.me/${customTourDetails.customerWhatsappNo}`}
                      >
                        WhatsApp
                      </Button>

                      {/* </Column> */}
                    </Row>
                  </Section>
                </Column>
              </Row>
            </Section>

            <Text
              style={{
                ...paragraph,
                textAlign: "center",
                paddingTop: 10,
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2024 | 118/ 5 st Joseph street, Grandpass, Colombo 14, Sri
              Lanaka | www.tourbookingsrilanka.com
            </Text>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};

export default CustomTourPackageOwnerEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  margin: "0",
};

const container = {
  width: "648px",
  maxWidth: "100%",
  position: "relative",
};

const section = {
  marginBottom: 20,
};

const paragraph = {
  fontSize: 14,
  margin: 0,
  color: "black",
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
