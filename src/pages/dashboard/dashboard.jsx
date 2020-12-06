import React from "react";
import UsersByDevice from "../../components/charts/usersByDevice";
import UsersByDeviceTwo from "../../components/charts/usersByDeviceTwo";
import { Container, Grid } from "@material-ui/core";

import LeftBar from "../../components/leftBar/leftBar";
import DashboardMain from "../../components/dashboardMain/dashboardmain";
import DashboardCardStatistics from "../../components/dashboardMain/dashboardCardStatistics";
import AdminRightSideHeader from "../../components/dashboardMain/menuHeader";

const Dashboard = () => {
  return (
    // <div style={{ display: "flex" }}>
    //   {/* <div className="row"> */}
    //   <div className="col-lg-2 p-0">
    //     <LeftBar />
    //   </div>
    //   <div className="col-lg-10">
    //     <DashboardMain />
    //     <div className="col-lg-8" style={{ padding: "18px" }}>
    //       NAVBAR
    //     </div>
    //     <div className="col-lg-8">
    //       <UsersByDevice />
    //     </div>
    //     <div className="col-lg-8" style={{ marginTop: "25px" }}>
    //       <UsersByDeviceTwo />
    //     </div>
    //   </div>
    //   {/* </div> */}
    // </div>
    <div className="dashboardMain">
      <Container maxWidth={false}>
        <Grid container spacing={6}>
          <Grid xs={2} className="col-lg-2 p-0">
            <LeftBar className="p-0" />
          </Grid>
          <Grid xs={10} style={{ marginTop: "20px" }}>
            <AdminRightSideHeader />
            <Grid style={{ padding: "25px" }} item xs={12} sm={12} md={12}>
              <DashboardCardStatistics />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12}>
              <DashboardMainCarousel />
            </Grid> */}
            <div
              className="row"
              style={{
                padding: "40px",
              }}
            >
              <Grid item md={6} sm={12} xs={12} xl={6}>
                <UsersByDevice />
              </Grid>
              <Grid item md={6} sm={12} xs={12} xl={4}>
                <UsersByDeviceTwo />
              </Grid>
            </div>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="blueBanner">
                <div className="">
                  <p className="blueBanner mb-0">Статистика</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {/* <DashboardCards /> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
