import React, { Component } from 'react';
import { BarChart } from 'react-d3';
import StationDropDown from '../StationDropDown/StationDropDown.jsx';
import Bart from '../Bart/Bart.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      stations: [
        '1 AVE',
        '103 ST',
        '103 ST-CORONA',
        '104 ST',
        '110 ST',
        '110 ST-CATHEDRL',
        '110 ST-CPN',
        '111 ST',
        '116 ST',
        '116 ST-COLUMBIA',
        '121 ST',
        '125 ST',
        '135 ST',
        '137 ST-CITY COL',
        '138 ST-3 AVE',
        '138 ST-GR CONC',
        '14 ST',
        '14 ST-6 AVE',
        '14 ST-UNION SQ',
        '145 ST',
        '148 ST-LENOX',
        '149 ST-3 AVE',
        '149 ST-GR CONC',
        '14TH STREET',
        '15 ST-PROSPECT',
        '155 ST',
        '157 ST',
        '161 ST-YANKEE',
        '163 ST-AMSTERDM',
        '167 ST',
        '168 ST-BROADWAY',
        '169 ST',
        '170 ST',
        '174 ST',
        '174-175 ST',
        '175 ST',
        '176 ST',
        '18 AVE',
        '18 ST',
        '181 ST',
        '182-183 ST',
        '183 ST',
        '190 ST',
        '191 ST',
        '2 AVE',
        '20 AVE',
        '207 ST',
        '21 ST',
        '215 ST',
        '219 ST',
        '22 AVE-BAY PKY',
        '225 ST',
        '23 ST',
        '23 ST-5 AVE',
        '23 ST-6 AVE',
        '231 ST',
        '233 ST',
        '238 ST',
        '242 ST',
        '25 AVE',
        '25 ST',
        '28 ST',
        '28 ST-BROADWAY',
        '3 AVE',
        '33 ST',
        '33 ST/RAWSON ST',
        '34 ST-HERALD SQ',
        '34 ST-HUDSON YD',
        '34 ST-PENN STA',
        '36 ST',
        '4 AVE-9 ST',
        '40 ST-LOWERY ST',
        '42 ST-BRYANT PK',
        '42 ST-GRD CNTRL',
        '42 ST-PA BUS TE',
        '42 ST-TIMES SQ',
        '45 ST',
        '46 ST',
        '46 ST-BLISS ST',
        '47-50 ST-ROCK',
        '49 ST-7 AVE',
        '5 AVE-53 ST',
        '5 AVE-59 ST',
        '5 AVE-BRYANT PK',
        '50 ST',
        '51 ST',
        '52 ST-LINCOLN',
        '53 ST',
        '55 ST',
        '57 ST',
        '57 ST-7 AVE',
        '59 ST',
        '59 ST-COLUMBUS',
        '61 ST/WOODSIDE',
        '63 DR-REGO PARK',
        '65 ST',
        '66 ST-LINCOLN',
        '67 AVE',
        '68ST-HUNTER COL',
        '69 ST-FISK AVE',
        '7 AV-PARK SLOPE',
        '7 AVE',
        '7 AVE-53 ST',
        '71 ST',
        '72 ST',
        '75 AVE',
        '77 ST',
        '79 ST',
        '8 AVE',
        '8 ST-B\'WAY NYU',
        '81 ST-MUSEUM',
        '82 ST-JACKSON H',
        '86 ST',
        '9 AVE',
        '90 ST-ELMHURST',
        '96 ST',
        '9TH STREET',
        'ALABAMA AVE',
        'ALLERTON AVE',
        'AQUEDUCT TRACK',
        'AQUEDUCT-N CNDT',
        'ASTOR PLACE',
        'ATLANTIC AVE',
        'AVE H',
        'AVE I',
        'AVE J',
        'AVE M',
        'AVE N',
        'AVE P',
        'AVE U',
        'AVE X',
        'Atlantic Avenue/Barclays Center',
        'BAY 50 ST',
        'BAY PARKWAY',
        'BAY PKY-22 AVE',
        'BAY RIDGE AVE',
        'BAY RIDGE-95 ST',
        'BAYCHESTER AVE',
        'BEACH 105 ST',
        'BEACH 25 ST',
        'BEACH 36 ST',
        'BEACH 44 ST',
        'BEACH 60 ST',
        'BEACH 67 ST',
        'BEACH 90 ST',
        'BEACH 98 ST',
        'BEDFORD AVE',
        'BEDFORD PARK BL',
        'BEDFORD/NOSTRAN',
        'BEEBE-39 AVE',
        'BERGEN ST',
        'BEVERLEY ROAD',
        'BEVERLY ROAD',
        'BLEECKER ST',
        'BOROUGH HALL/CT',
        'BOTANIC GARDEN',
        'BOWERY',
        'BOWLING GREEN',
        'BOYD-88 ST',
        'BRIGHTON BEACH',
        'BROAD CHANNEL',
        'BROAD ST',
        'BROADWAY',
        'BROADWAY-31 ST',
        'BROADWAY-ENY',
        'BROADWAY/LAFAY',
        'BRONX PARK EAST',
        'BROOK AVE',
        'BROOKLYN BRIDGE/CHAMBERS ST',
        'BUHRE AVE',
        'BURKE AVE',
        'BURNSIDE AVE',
        'BUSHWICK AVE',
        'CANAL ST',
        'CARROLL ST',
        'CASTLE HILL AVE',
        'CATHEDRL-110 ST',
        'CENTRAL AVE',
        'CHAMBERS ST',
        'CHAUNCEY ST',
        'CHRISTOPHER ST',
        'CHURCH AVE',
        'CLARK ST',
        'CLASSON AVE',
        'CLEVELAND ST',
        'CLINTON-WASH AV',
        'CORTELYOU ROAD',
        'CORTLANDT ST',
        'COURT SQ',
        'CRESCENT ST',
        'CROWN HTS-UTICA',
        'CYPRESS AVE',
        'CYPRESS HILLS',
        'DEKALB AVE',
        'DELANCEY ST',
        'DITMARS BL-31 S',
        'DITMAS AVE',
        'DYCKMAN ST',
        'DYCKMAN-200 ST',
        'DYRE AVE',
        'E 143 ST',
        'E 149 ST',
        'E 177 ST-PARKCH',
        'E 180 ST',
        'E TREMONT AVE',
        'EAST 105 ST',
        'EAST BROADWAY',
        'EASTERN PKWY',
        'ELDER AVE',
        'ELDERTS LANE',
        'ELMHURST AVE',
        'EUCLID AVE',
        'EXCHANGE PLACE',
        'FAR ROCKAWAY',
        'FLATBUSH AVE',
        'FLUSHING AVE',
        'FORDHAM ROAD',
        'FOREST AVE',
        'FOREST HILLS-71',
        'FOREST PARKWAY',
        'FRANKLIN AVE',
        'FRANKLIN ST',
        'FREEMAN ST',
        'FRESH POND ROAD',
        'FT HAMILTON PKY',
        'FULTON ST',
        'GATES AVE',
        'GRAHAM AVE',
        'GRAND ARMY PLAZ',
        'GRAND AV-NEWTON',
        'GRAND ST',
        'GRAND-30 AVE',
        'GRANT AVE',
        'GREENPOINT AVE',
        'GREENWOOD-111',
        'GROVE STREET',
        'GUN HILL ROAD',
        'HALSEY ST',
        'HARRISON',
        'HEWES ST',
        'HIGH ST',
        'HOUSTON ST',
        'HOWARD BCH-JFK',
        'HOYT ST',
        'HOYT ST-ASTORIA',
        'HOYT/SCHERMER',
        'HUDSON-80 ST',
        'HUNTERS PT AVE',
        'HUNTS POINT AVE',
        'INTERVALE-163',
        'INWOOD-207 ST',
        'JACKSON AVE',
        'JAMAICA CENTER',
        'JAMAICA-179 ST',
        'JAMAICA-VAN WYC',
        'JAY ST-METROTEC',
        'JEFFERSON ST',
        'JFK HOWARD BCH',
        'JFK JAMAICA CT1',
        'JOURNAL SQUARE',
        'JUNCTION BLVD',
        'JUNIUS ST',
        'KINGS HIGHWAY',
        'KINGSBRIDGE RD',
        'KINGSTON AVE',
        'KINGSTON-THROOP',
        'KNICKERBOCKER',
        'KOSCIUSZKO ST',
        'LACKAWANNA',
        'LAFAYETTE AVE',
        'LEFFERTS BLVD',
        'LEXINGTON AVE',
        'LEXINGTON-53 ST',
        'LIBERTY AVE',
        'LIVONIA AVE',
        'LONGWOOD AVE',
        'LORIMER ST',
        'MAIN ST',
        'MARBLE HILL-225',
        'MARCY AVE',
        'METROPOLITAN AV',
        'METROPOLITAN AV/LORIMER ST',
        'METS-WILLETS PT',
        'MIDDLETOWN ROAD',
        'MONTROSE AVE',
        'MORGAN AVE',
        'MORRIS PARK',
        'MORRISON AVE',
        'MOSHOLU PARKWAY',
        'MT EDEN AVE',
        'MURRAY ST-B\'WAY',
        'MYRTLE AVE',
        'MYRTLE-WILLOUGH',
        'NASSAU AV',
        'NECK ROAD',
        'NEPTUNE AVE',
        'NEREID AVE',
        'NEVINS ST',
        'NEW LOTS AVE',
        'NEW UTRECHT AVE',
        'NEWARK',
        'NEWKIRK AVE',
        'NORTHERN BLVD',
        'NORWOOD AVE',
        'NORWOOD-205 ST',
        'NOSTRAND AVE',
        'OCEAN PARKWAY',
        'ORCHARD BEACH',
        'OXFORD-104 ST',
        'PARK PLACE',
        'PARK PLACE/WORLD TRADE CTR/CHAMBERS ST',
        'PARKSIDE AVE',
        'PARSONS BLVD',
        'PATH WTC',
        'PAVONIA/NEWPORT',
        'PELHAM BAY PARK',
        'PELHAM PARKWAY',
        'PENNSYLVANIA AV',
        'PRESIDENT ST',
        'PRINCE ST-B\'WAY',
        'PROSPECT AVE',
        'PROSPECT PARK',
        'QUEENS PLAZA',
        'QUEENSBORO PLZ',
        'RALPH AVE',
        'RECTOR ST',
        'RIT-MANHATTAN',
        'RIT-ROOSEVELT',
        'ROCKAWAY AVE',
        'ROCKAWAY BLVD',
        'ROCKAWAY PK 116',
        'ROCKAWAY PKY',
        'ROOSEVELT IS',
        'Roosevelt Avenue/74th Street',
        'SARATOGA AVE',
        'SENECA AVE',
        'SHEEPSHEAD BAY',
        'SHEPHERD AVE',
        'SIMPSON ST',
        'SMITH-9 ST',
        'SPRING ST',
        'ST LAWRENCE AVE',
        'ST. GEORGE',
        'STEINWAY ST',
        'STERLING ST',
        'STILLWELL AVE',
        'SUTPHIN BLVD',
        'SUTTER AVE',
        'TOMPKINSVILLE',
        'TREMONT AVE',
        'TWENTY THIRD ST',
        'UNION ST',
        'UNION TPK-KEW G',
        'UTICA AVE',
        'VAN ALSTON-21ST',
        'VAN SICLEN AVE',
        'VAN WYCK BLVD',
        'VERNON/JACKSON',
        'W 4 ST-WASH SQ',
        'W 8 ST-AQUARIUM',
        'WAKEFIELD-241',
        'WALL ST',
        'WASHINGTON-36 A',
        'WESTCHESTER SQ',
        'WHITEHALL ST/SOUTH FERRY',
        'WHITLOCK AVE',
        'WILSON AVE',
        'WINTHROP ST',
        'WOODHAVEN BLVD',
        'WOODLAWN ROAD',
        'YORK ST',
        'ZEREGA AVE'
      ],
      stationSelected: '',
      dateSelected: '',
      data: ''
    }
  }

  changeSelected(event) {
    let arrayOfElements = event.target.parentElement.childNodes
    console.log(arrayOfElements)
    this.setState({
      stationSelected: arrayOfElements[2].value,
      dateSelected: arrayOfElements[3].value,
    });
  }

  getData() {
    return fetch('http://ec2-54-89-253-54.compute-1.amazonaws.com/myapp/make_it_happen')
    .then(r => r.json())
    .then((dataset) => {
      this.setState({
        data: [{
          "name": "Relative Crowdedness",
          "values": Object.keys(dataset).map((key) => {
            return {"x" : key, "y" : dataset[key]}
          })
        }]
      });
      let intervalID = setInterval(() => {
        window.scrollBy(0, 5);
        if( window.pageYOffset >= window.innerHeight )
            clearInterval(intervalID);
        }, 13);
      // window.scrollTo(0, window.innerHeight);
    })
  }

  postData() {
    // return fetch('http://ec2-54-89-253-54.compute-1.amazonaws.com/myapp/make_it_happen', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/JSON'
    //   },
    //   body: {
    //     date: this.state.dateSelected,
    //     station: this.state.stationSelected
    //   }
    // })
    console.log(this.state.stationSelected, this.state.dateSelected)
  }

  formatDate() {

  }

  graph() {
    return this.state.data ? ( <div className="Bart" > <Bart
          data={this.state.data}
          width={500}
          height={200}
          fill={'#3182bd'}
          title='Crowdedness'
          yAxisLabel='business'
          xAxisLabel='time'/>
         </div>) : <div/>;
    }

  render() {
    return(
      <div>
        <header>
          <h3>Crowd Surfer</h3>
        </header>
        <div className="search">
          <StationDropDown
            stations={this.state.stations}
            changeSelected={this.changeSelected.bind(this)}
          />
          <input
            type="date"
            id="datePicker"
            onChange={this.changeSelected.bind(this)}
          />
          <button onClick={this.getData.bind(this)}>Go!</button>
        </div>
        {this.graph()}
      </div>
    )
  }
}
