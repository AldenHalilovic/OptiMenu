import React from 'react'
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'

const AboutSection = () => {
    return (
        <Grid container className="main" py={10} >
            <Grid item xs={12} sx={{ display: "grid", placeItems: "center" }}>
                <Stack direction={"row"} alignItems="flex-start" justifyContent={"space-between"}>
                    <Card sx={{ width: "48%" }}>
                        <CardContent sx={{ background: "#ed6c02", color: "#fff", height: "340px" }}>
                            <Stack direction={"column"} >
                                <Typography color="white" fontSize={"30px"} sx={{ borderBottom: "1px solid #fff", mb: 2 }}>
                                    Place orders online 24/7
                                </Typography>
                                <Typography fontSize={"20px"}>
                                    When you join OptiMeal/OptiMenu App your dedicated manager will get you up and running with our intuitive online ordering system, my OptiMeal/OptiMenu App.

                                    Here you can browse and download lists of all our meal ranges (including special diets) and place an order whenever you want.

                                    If you wish, you can save your order templates to match your menu cycles, along with your usual order quantities.

                                    With my OptiMeal/OptiMenu App , viewing our products and placing orders couldn’t be easier or quicker, and its available 24/7.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ width: "48%", }}>
                        <CardContent sx={{ background: "#ed6c02", color: "#fff", height: "340px" }}>
                            <Stack direction={"column"} >
                                <Typography color="white" fontSize={"30px"} sx={{ borderBottom: "1px solid #fff", mb: 2 }}>
                                    Nutritional info at the touch of a button
                                </Typography>
                                <Typography fontSize={"20px"}>
                                    OptiMeal/OptiMenu App also provides full nutritional breakdowns on all of our products, allowing you to search for meals and create menus that meet specific dietary requirements.

                                    All of this information can be viewed online or downloaded and printed to help with planning if preferred.

                                    Should you need further advice regarding the nutritional value of specific meals or you need help creating a special menu, then you can even speak directly to our qualified dietitian.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>

            <Grid item xs={12} sx={{ display: "grid", placeItems: "center", mt: 10 }}>
                <Stack direction={"row"} alignItems="flex-start" justifyContent={"space-between"}>
                    <Card sx={{ width: "48%", }}>
                        <CardContent sx={{ background: "#ed6c02", color: "#fff", height: "650px" }}>
                            <Stack direction={"column"}>
                                <Typography color="white" fontSize={"30px"} sx={{ borderBottom: "1px solid #fff", mb: 2 }}>
                                    Integrating your requirements
                                </Typography>
                                <Typography fontSize={"20px"} mb={3}>
                                    We always look to offer a tailored service, and will work with you to integrate your specific requirements into our own systems, including linking to your own digital platforms and integrating your purchase orders.
                                </Typography>
                                <img alt="img" src={"https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/10/10134125/Healthy-Tips-for-Working-on-Your-Laptop.jpg"} width={"100%"} height="430px" />
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: "48%", }}>
                        <CardContent sx={{ background: "#ed6c02", color: "#fff", height: "650px" }}>
                            <Stack direction={"column"}>
                                <Typography color="white" fontSize={"30px"} sx={{ borderBottom: "1px solid #fff", mb: 2 }}>
                                    Dedicated support when you need it
                                </Typography>
                                <Typography fontSize={"20px"} mb={3}>
                                    You can always contact your dedicated  OptiMeal/OptiMenu  account manager directly with any question, but our customer service team is also on hand between Monday to Friday from 7.30 am to 5.30 pm, to help with any order queries or special requests.
                                </Typography>
                                <img alt="img" src={"https://images.squarespace-cdn.com/content/v1/5fde0871cb96363ef0b6b786/cfce2d72-769a-4cf1-bfcb-cb4e10c3ef8f/V2-88.jpg"} width={"100%"} />
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default AboutSection