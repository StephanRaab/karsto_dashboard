import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataTempHumid,
  optionsTempHumid,
  responsiveTempHumid,
  legendTempHumid,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                  statsIcon="fa fa-history"
                  id="chartHours"
                  title="Sensor Temperature & Humidity"
                  category="24 Hours performance"
                  stats="Updated 3 minutes ago"
                  content={
                    <div className="ct-chart">
                      <ChartistGraph
                        data={dataTempHumid}
                        type="Line"
                        options={optionsTempHumid}
                        responsiveOptions={responsiveTempHumid}
                      />
                    </div>
                  }
                  legend={
                    <div className="legend">{this.createLegend(legendTempHumid)}</div>
                  }
                />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-alarm text-warning" />}
                statsText="Alarms"
                statsValue="3"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph3 text-danger" />}
                statsText="Devices"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
          </Row>
          {/* <Row>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row> */}
          {/*<Row>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="Bar Graph"
                category="Bar graph category subtitle"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>*/}
          {/* <Row>
             <Col md={12}>
              <Card
                title="Recent Activity"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row> */}
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
