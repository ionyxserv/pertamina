import React, {Component} from 'react';
import classnames from 'classnames';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  TabContent,
  TabPane,
  Table,
} from 'reactstrap';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const brandInfo = getStyle('--info')
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};
const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  lorem() {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  }

  onlineEmployeeList(){
    return(
      <>
        <Col xs="12" lg="12">
          <Table responsive>
            <thead>
            <tr>
              <th>Username</th>
              <th>Date registered</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Yiorgos Avraamu</td>
              <td>2012/01/01</td>
              <td>Member</td>
              <td>
                <Badge color="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>Agapetus Tadeáš</td>
              <td>2012/01/21</td>
              <td>Staff</td>
              <td>
                <Badge color="success">Active</Badge>
              </td>
            </tr>
            </tbody>
          </Table>
          <Pagination>
            <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
            <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
          </Pagination>
        </Col>
      </>
    );
  }

  allEmployeelist(){
    return(
      <>
        <Col xs="12" lg="12">
          <Table responsive>
            <thead>
            <tr>
              <th>Username</th>
              <th>Date registered</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Yiorgos Avraamu</td>
              <td>2012/01/01</td>
              <td>Member</td>
              <td>
                <Badge color="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>Avram Tarasios</td>
              <td>2012/02/01</td>
              <td>Staff</td>
              <td>
                <Badge color="secondary">Inactive</Badge>
              </td>
            </tr>
            <tr>
              <td>Quintin Ed</td>
              <td>2012/02/01</td>
              <td>Admin</td>
              <td>
                <Badge color="secondary">Inactive</Badge>
              </td>
            </tr>
            <tr>
              <td>Enéas Kwadwo</td>
              <td>2012/03/01</td>
              <td>Member</td>
              <td>
                <Badge color="secondary">Inactive</Badge>
              </td>
            </tr>
            <tr>
              <td>Agapetus Tadeáš</td>
              <td>2012/01/21</td>
              <td>Staff</td>
              <td>
                <Badge color="success">Active</Badge>
              </td>
            </tr>
            </tbody>
          </Table>
          <Pagination>
            <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
            <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
          </Pagination>
        </Col>
      </>
    );
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {this.onlineEmployeeList()}
        </TabPane>
        <TabPane tabId="2">
          {this.allEmployeelist()}
        </TabPane>
        <TabPane tabId="3">
          {`3. ${this.lorem()}`}
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">9.823</div>
                <div>Employee online</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '1'}
                  onClick={() => { this.toggle(3, '1'); }}
                >
                  <i className="icon-calculator"></i>
                  <span className={this.state.activeTab[3] === '1' ? '' : 'd-none'}> Online</span>
                  {'\u00A0'}<Badge color="success">2</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '2'}
                  onClick={() => { this.toggle(3, '2'); }}
                >
                  <i className="icon-basket-loaded"></i>
                  <span className={this.state.activeTab[3] === '2' ? '' : 'd-none'}> All Employee</span>
                  {'\u00A0'}<Badge pill color="Light">29</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[3] === '3'}
                  onClick={() => { this.toggle(3, '3'); }} >
                    <i className="icon-pie-chart"></i>
                    <span className={this.state.activeTab[3] === '3' ? '' : 'd-none'}> Charts</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[3]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tabs;
