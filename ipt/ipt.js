const cockpit_data = [
    { 
        name: 'Airspeed indicator', 
        clickmap: { coords: '292,314,41', shape: 'circle' },
        events: {
            'asi-alive': 'Check alive',
            'asi-white': 'Check white arc',
            'asi-60': 'Check 60kts',
            'asi-70': 'Check 70kts',
            'asi-75': 'Check 75kts',
            'asi-80': 'Check 80kts',
        }
    },
    { 
        name: 'Gyro horizon', 
        clickmap: { coords: '392,311,45', shape: 'circle' },
        events: {
            'instr-checked' : 'Check Flight Instruments'
        }
    },
    { 
        name: 'Altimeter', 
        clickmap: { coords: '492,313,40', shape: 'circle' },
        events: {
            'alt-set-qnh': 'Set QNH',
            'alt-200': 'Check 200ft',
            'alt-1000': 'Check 1000ft'
        },
    },
    { 
        name: 'Turn coordinator',
        clickmap: { coords: '301,408,39', shape: 'circle' }
    },
    {
        name: 'Directional gyro',
        clickmap: { coords: '396,405,43', shape: 'circle' },
        events: {
            'dg-set':'Set',
            'dg-chk':'Check',
            'dg-chk-rwy': 'Check runway direction'
        }
    },
    {
        name: 'Rate of climb indicator',
        clickmap: { coords: '496,410,42', shape: 'circle' }
    },
    {
        name: 'Vacuum Gauge',
        clickmap: { coords: '149,382,15', shape: 'circle' },
        events: {
            'suc-alive': 'Check alive'
        }
    },
    {
        name: 'Battery safety switch',
        clickmap: { coords: '163,483,188,536', shape: 'rect' },
        events: { 'bat-on': 'On', 'bat-off': 'Off' }
    },
    {
        name: 'FADEC & alternator excitation battery',
        clickmap: { coords: '197,485,222,532', shape: 'rect' },
        events: { 'eng-on': 'On', 'eng-off': 'Off' }
    },
    {
        name: 'Electrical fuel pump control',
        clickmap: { coords: '244,492,261,524', shape: 'rect' },
        events: { 'fp-on': 'On', 'fp-off': 'Off' }
    },
    {
        name: 'Westach Quad Indicator',
        clickmap: { coords: '363,523,41', shape: 'circle' },
        events: { 
            'wqi-check-fuel': 'Check Fuel Quantity/Temperature',
            'wqi-volt-green': 'Check voltmeter in green',
        }
    },
    {
        name: 'Engine indicator CED-125',
        clickmap: { coords: '451,523,43', shape: 'circle' },
        events: { 
            'ced-test-mon': 'Monitor Light Test',
            'ced-op-mon': 'Monitor oil pressure 3sec',
            'ced-rpm-890': 'Check RPM 890',
            'ced-ot-ct-check': 'Check OT and CT',
            'ced-all-green': 'Check all green',
            'ced-rpm-2400': 'Check RPM 2400'
        }
    },
    {
        name: 'Alt induction air',
        clickmap: { coords: '510,499,14', shape: 'circle' },
        events: { 'aia-closed': 'Closed', 'aia-open': 'Open' }
    },
    {
        name: 'Alternator relay breaker',
        clickmap: { coords: '178,559,9', shape: 'circle' },
        events: {
            'alt-brk-in': 'In',
            'alt-brk-pull': 'Pull'
        }
    },
    {
        name: 'Force FADEC B',
        clickmap: { coords: '201,541,225,583', shape: 'rect' },
        events: {
            'force-b-auto': 'Force B Auto',
            'force-b-on': 'Force B On'
        }
    },
    {
        name: 'Key',
        clickmap: { coords: '289,558,16', shape: 'circle' },
        events: { 
            'key-ins': 'Insert',
            'key-off': 'Off',
            'key-start': 'Start' ,
            'key-rem': "Remove"
        }
    },
    {
        name: 'Glow light',
        clickmap: { coords: '289,492,7', shape: 'circle' },
        events: { 'glow-wait': 'Wait until OFF' }
    },
    {
        name: 'FADEC test button',
        clickmap: { coords: '288,517,9', shape: 'circle' },
        events: {
            'fadec-test-hold' : 'Press & Hold',
            'fadec-test-release': 'Release',
            'fadec-check-fault': 'Press at least 2 sec.'
        }
    },
    {
        name: 'CED-125 lightning knob',
        clickmap: { coords: '514,527,9', shape: 'circle' }
    },
    {
        name: 'CED test/warning switch',
        clickmap: { coords: '514,553,7', shape: 'circle' },
        events: {'ced-ack':'Check and Acknowledge'}
    },
    {
        name: 'Electrical throttle control',
        clickmap: { coords: '561,549,629,656', shape: 'rect' },
        events: { 'thr-frict': 'Set Friction', 'thr-00': 'Idle', 'thr-25': '25%', 'thr-50': '50%', 'thr-70': '70%', 'thr-100': 'FULL' }
    },
    {
        name: 'Brakes',
        clickmap: { coords: '239,597,518,686', shape: 'rect' },
        events: {
            'brk-rel': 'Release parking brake',
            'brk-set': 'Set parking break',
            'brk-check': 'Check brakes',
            'brk-align': 'Align nose wheel'
        }
    },
    {
        name: 'Elevator trim',
        clickmap: { coords: '561,670,581,763', shape: 'rect' },
        events: {
            'trim-to' : 'Set for T/O'
        }
    },
    {
        name: 'Fuel tank valve',
        clickmap: { coords: '595,816,37', shape: 'circle' },
        events: { 'ftv-on': 'On', 'ftv-off': 'Off' },
    },
    {
        name: 'Warning Panel',
        clickmap: { coords: '304,212,520,236', shape: 'rect' },
        events: { 
            'wp-test': 'Test',
            'wp-set': 'Set Day/Night',
            'wp-fadec-off': 'Check FADEC A&B Off',
            'wp-fadec-A-on': 'Check FADEC A On',
            'wp-fadec-B-on': 'Check FADEC B On',
            'wp-fadec-on': 'Check FADEC A&B On',
            'wp-all-off': 'Check all off'
        }
    },
    {
        name: 'Magnetic compass',
        clickmap: { coords: '596,136,38', shape: 'circle' }
    },
    {
        name: 'Instrument panel lights',
        clickmap: { coords: '596,210,716,250', shape: 'rect' },
        events: {
            'instr-off': 'Lights off'
        }
    },
    {
        name: 'Landing light',
        clickmap: { coords: '732,216,751,248', shape: 'rect' },
        events: {
            'ldg-on': 'On',
            'ldg-off': 'Off',
            'ldg-rq': 'As required'
         }
    },
    {
        name: 'Taxi light',
        clickmap: { coords: '760,213,778,251', shape: 'rect' },
        events: {
            'taxi-on': 'On',
            'taxi-off': 'Off',
            'taxi-rq': 'As required'
         }
    },
    {
        name: 'Strobe light',
        clickmap: { coords: '782,214,801,249', shape: 'rect' },
        events: { 
            'strb-on': 'On',
            'strb-off': 'Off'
        }
    },
    {
        name: 'Navigation lights',
        clickmap: { coords: '807,215,826,248', shape: 'rect' },
        events: { 
            'nav-on': 'On',
            'nav-off': 'Off',
            'nav-rq': 'As required'
        }
    },
    {
        name: 'Pitot heat',
        clickmap: { coords: '832,216,849,247', shape: 'rect' },
        events: {
            'pitot-on': 'On',
            'pitot-off': 'Off',
            'pitot-rq' : 'As required'
        }
    },
    {
        name: 'Cabin heat',
        clickmap: { coords: '994,388,12', shape: 'circle' },
        events: {
            'ch-off': 'Off',
        }
    },
    {
        name: 'Cabin heat control',
        clickmap: { coords: '1013,482,1073,554', shape: 'rect' },
        events: {
            'chc-off': 'Off'
        }
    },
    {
        name: 'Clock/chronometer',
        clickmap: { coords: '210,399,30', shape: 'circle' }
    },
    {
        name: 'Hourmeter',
        clickmap: { coords: '195,438,235,459', shape: 'rect' }
    },
    {
        name: 'Circuit breakers',
        clickmap: { coords: '843,451,1000,559', shape: 'rect' },
        events: { 'cb-in': 'All In' }
    },
    {
        name: 'Avionics master switch',
        clickmap: { coords: '574,492,13', shape: 'circle' },
        events: { 'ams-on': 'On', 'ams-off': 'Off' }
    },
    {
        name: 'VOR/LOC indicator',
        clickmap: { coords: '590,308,46', shape: 'circle' }
    },
    {
        name: 'ELT',
        clickmap: { coords: '894,287,923,337', shape: 'rect' }
    },

    {
        name: 'Alternate static switch',
        clickmap: { coords: '603,387,622,414', shape: 'rect' },
        events: { 'ass-on': 'On', 'ass-off': 'Off' }
    },
    {
        name: 'Audio panel',
        clickmap: { coords: '666,267,839,302', shape: 'rect' }
    },
    {
        name: 'Radio 1',
        clickmap: { coords: '667,304,836,371', shape: 'rect' },
        events: { 
            'atis-recv': 'ATIS', 
            'startup-app' : 'Request startup', 
            'taxi-app' : 'Request taxi',
            'to-app': 'Report ready for departure',
            'radio-set' : 'Set',
            'radio-off': 'Off'
        }
    },
    {
        name: 'Radio 2',
        clickmap: { coords: '664,375,833,416', shape: 'rect' },
        events: { 
            'atis-recv': 'ATIS', 
            'startup-app' : 'Request startup',
            'taxi-app' : 'Request taxi',
            'to-app': 'Report ready for departure',
            'radio-set' : 'Set',
            'radio-off' : 'Off'
        }
    },
    {
        name: 'Transponder',
        clickmap: { coords: '663,420,830,464', shape: 'rect' },
        events: {
            'tx-stby': 'STBY/GND',
            'tx-alt': 'ALT',
            'tx-off': 'Off'
        }
    },
    {
        name: 'Flight controls',
        clickmap: { coords: '94,634,224,797', shape: 'rect' },
        events: {
            'fctl-check' : 'Check free and correct'
        }
    },
    {
        name: 'Flaps',
        clickmap: { coords: '670,800,730,850', shape: 'rect'},
        events: {'flp-up': 'Up', 'flp-one': 'Notch 1', 'flp-two':'Notch 2'}
    },
    {
        name: 'General',
        clickmap: { coords: '0,0,250,130', shape: 'rect'},
        events: {
            'gen-preflight-insp': 'Do preflight inspection',
            'gen-papers': 'Check ship\'s papers/journal/keys',
            'gen-loose': 'Stow loose objects',
            'gen-canopy': 'Close canopy',
            'gen-canopy-unlock': 'Unlock canopy',
            'gen-seats': 'Adjust seats',
            'gen-belts': 'Fasten seatbelts and harnesses',
            'gen-brief': 'Brief passengers',
            'gen-outside': 'Check outside',
            'gen-taxi': 'Brief taxi',
            'gen-to-brief': 'Brief take off',
            'gen-app-brief': 'Brief approach'
        }
    }
];

const checklist = [
    {
        id: 'before_start',
        name: 'Before Start',
        items: [
            { action: 'Preflight Inspection', check: 'Completed', event: 'gen-preflight-insp' },
            { action: 'Ship\'s papers / Journal / Keys', check: 'On board', event: 'gen-papers' },
            { action: 'Loose Objects', check: 'Stowed', event: 'gen-loose' },
            { action: 'Canopy', check: 'Closed & Locked/Partially open', event: 'gen-canopy' },
            { action: 'Parking Brake', check: 'Set', event: 'brk-set' },
            { action: 'Flaps', check: 'Retracted', event: 'flp-up' },
            { action: 'Seats', check: 'Adjusted & Locked', event: 'gen-seats' },
            { action: 'Seatbelts & Harnesses', check: 'Fastened', event: 'gen-belts' },
            { action: 'Passenger Briefing / TEM', check: 'Completed', event: 'gen-brief' },
        ]
    },
    {
        id: 'startup',
        name: 'Sartup',
        items: [
            { action: 'Alternate Static Source', check: 'OFF', event: 'ass-off' },
            { action: 'Battery Switch', check: 'ON', event: 'bat-on' },
            { action: 'CED lights auto test', check: 'Monitored', event: 'ced-test-mon' },
            { action: 'Circuit Breakers', check: 'All IN', event: 'cb-in' },
            { action: 'Warning Panel', check: 'Tested & Set Day/Night', event: 'wp-test' },
            { action: '', check: '', event: 'wp-set' },
            { action: 'Fuel Quantity/Fuel Temperature', check: 'Checked', event: 'wqi-check-fuel' },
            { action: 'Avionics Master Switch', check: 'On', event: 'ams-on' },
            { action: 'Transponder', check: 'STBY/GND', event: 'tx-stby' },
            { action: 'ATIS', check: 'As require', event: 'atis-recv' },
            { action: 'Startup', check: 'Approved', event: 'startup-app' },
            { action: 'Fuel Selector', check: 'On', event: 'ftv-on' },
            { action: 'Alternate Induction Air', check: 'Closed', event: 'aia-closed' },
            { action: 'Electric Fuel Pump', check: 'ON', event: 'fp-on' },
            { action: 'Power Lever Friction', check: 'Set', event: 'thr-frict' },
            { action: 'Power Lever', check: 'IDLE', event: 'thr-00' },
            { action: 'Strobe Lights', check: 'ON', event: 'strb-on' },
            { action: 'Key', check: 'Inserted', event: 'key-ins' },
            { action: 'Avionics Master Switch', check: 'OFF', event: 'ams-off' },
            { action: 'Engine Master Switch', check: 'ON', event: 'eng-on' },
            { action: 'FADEC Lights A & B', check: 'Both OFF', event: 'wp-fadec-off' },
            { action: 'Outside', check: 'Clear', event: 'gen-outside' },
            { action: 'Glow Control Light', check: 'Wait untill OFF', event: 'glow-wait' },
            { action: 'Key/Starter', check: 'Start Engine (>500 rpm)', event: 'key-start', memory: true },
            { action: 'Oil Pressure', check: 'In 3 sec. amber/green', event: 'ced-op-mon', memory: true },
            { action: 'RPM', check: '+-890 rpm', event: 'ced-rpm-890', memory: true },
            { action: 'Avionics Master Switch', check: 'ON', event: 'ams-on' },
            { action: 'Transponder', check: 'STBY/GND', event: 'tx-stby' },
            { action: 'CED', check: 'Checked & Acknowledged', event: 'ced-ack' },
            { action: 'Warning Panel Lights', check: 'All OFF', event: 'wp-all-off' },
            { action: 'Electric Fuel Pump', check: 'OFF', event: 'fp-off' },
            { action: 'Directional Gyro', check: 'Set', event: 'dg-set' },
            { action: 'Altimeter', check: 'Set QNH', event: 'alt-set-qnh' },
            { action: 'Radio Equipment', check: 'Set', event: 'radio-set' },
        ]
    },
    {
        id: 'taxi',
        name: 'Taxi',
        items: [
            { action: 'Taxi Lights', check: 'As required', event: 'taxi-rq'},
            { action: 'Navigation Lights', check: 'As required', event: 'nav-rq'},
            { action: 'Taxi', check: 'Approved', event:'taxi-app'},
            { action: 'Taxi briefing', check: 'Completed', event:'gen-taxi'},
            { action: 'Parking break', check: 'Released', event: 'brk-rel'},
            { action: 'If OT or CT in amber', check: 'Max 1400rpm', event: 'ced-ot-ct-check'},
            { action: 'Brakes', check: 'Checked', event: 'brk-check', memory: true},
            { action: 'Gyro\'s & Compass', check: 'Check', event:'dg-chk', memory: true},
        ]
    },
    {
        id: 'engine-run-up',
        name: 'Engine Run-Up',
        items: [
            { action: 'Nose Wheel', check: 'Aligned', event: 'brk-align'},
            { action: 'Parking brake', check: 'Set', event: 'brk-set'},
            { action: 'Power', check: 'IDLE', event: 'thr-00'},
            { action: 'FADEC Lights', check: 'Both OFF', event: 'wp-fadec-off'},
            { action: 'FADEC Test Button', check: 'Press & Hold', event: 'fadec-test-hold'},
            { action: 'FADEC Lights', check: 'Both A & B ON', event: 'wp-fadec-on', memory: true},
            { action: '', check: 'Only B ON', event: 'wp-fadec-B-on', memory: true},
            { action: '', check: 'Only A ON', event: 'wp-fadec-A-on', memory: true},
            { action: '', check: 'Both OFF', event: 'wp-fadec-off', memory: true},
            { action: 'During test: Suction', check: 'Alive', event: 'suc-alive', memory: true},
            { action: '', check: '', event: 'ced-rpm-890', memory: true},
            { action: 'RPM stabilized at +-890', check: 'Release test button', event: 'fadec-test-release', memory: true}
        ]
    },
    {
        id: 'before-to',
        name: 'Before Takeoff',
        items: [
            { action: 'Warning Panel Lights', check: 'All OFF', event: 'wp-all-off'},
            { action: 'Flight Instruments', check: 'Checked', event: 'instr-checked'},
            { action: 'Fuel Pump', check: 'ON', event: 'fp-on'},
            { action: 'Volt meter', check: 'In green', event: 'wqi-volt-green'},
            { action: 'CED', check: 'All in green', event: 'ced-all-green'},
            { action: 'Flaps', check: 'First notch', event: 'flp-one'},
            { action: 'Trim', check: 'Set T/O', event: 'trim-to'},
            { action: 'Flight Controls', check: 'Free & Correct', event: 'fctl-check'},
            { action: 'Seatbelts & Harnesses', check: 'Fastened', event: 'gen-belts' },
            { action: 'Canopy', check: 'Closed & locked', event: 'gen-canopy'},
            { action: 'Briefing (PAX/TO/Dept/TEM)', check: 'Completed', event:'gen-to-brief'},
            { action: 'Line up and TO', check: 'Approved', event: 'to-app'},
            { action: 'Parking brake', check: 'Released', event: 'brk-rel', memory: true},
            { action: 'Landing light', check: 'As required', event: 'ldg-rq', memory: true},
            { action: 'Pitot Heat', check: 'As required', event: 'pitot-rq', memory: true},
            { action: 'Transponder', check: 'ALT', event: 'tx-alt', memory: true}
        ]
    },
    {
        id: 'take-off',
        name: 'Normal Takeoff',
        items: [
            { action: 'RWY/Wind Direction', check: 'Checked', event: 'dg-chk-rwy', memory: true},
            { action: 'Power Lever', check: 'FULL', event: 'thr-100', memory: true},
            { action: 'CED', check: 'All in green/2300rpm', event: 'ced-all-green', memory: true},
            { action: '', check: '', event: 'ced-rpm-2400', memory: true},
            { action: 'Airspeed Indicator', check: 'Alive', event: 'asi-alive', memory: true},
            { action: 'Rotate', check: '60kts', event: 'asi-60', memory: true},
            { action: 'Climb', check: '80kts', event: 'asi-80', memory: true},
            { action: 'At', check: '200ft', event: 'alt-200', memory: true },
            { action: 'Flaps', check: 'Retracted', event: 'flp-up', memory: true },
            { action: 'At', check: '1000ft', event: 'alt-1000', memory: true },
            { action: 'Landing light', check: 'As Required', event: 'ldg-rq', memory: true},
            { action: 'Electric Fuel Pump', check: 'OFF', event: 'fp-off', memory: true}
        ]
    },
    {
        id: 'cruise',
        name: 'Cruise',
        items: [
            { action: 'Fuel Quantity/Fuel Temperature', check: 'Checked', event: 'wqi-check-fuel'},
            { action: 'Radio Equipment (COM/NAV)', check: 'Checked', event: 'radio-set'},
            { action: 'Engine CED', check: 'All in green', event: 'ced-all-green'},
            { action: 'Directional gyro', check: 'Checked', event: 'dg-chk'},
            { action: 'Altimeter', check: 'Set QNH/1013', event: 'alt-set-qnh'}
        ]
    },
    {
        id: 'entry-app',
        name: 'Entry/Approach',
        items: [
            { action: 'ATIS', check: 'As required', event: 'atis-recv'},
            { action: 'Altimeter', check: 'Set QNH', event: 'alt-set-qnh'},
            { action: 'Radio Equipment (COM/NAV)', check: 'Checked', event: 'radio-set'},
            { action: 'Engine CED', check: 'All in green', event: 'ced-all-green'},
            { action: 'Electric Fuel Pump', check: 'ON', event: 'fp-on'},
            { action: 'Brakes', check: 'Pressure', event: 'brk-check'},
            { action: 'Seatbelts & Harnesses', check: 'Fastened', event: 'gen-belts' },
            { action: 'Loose Objects', check: 'Stowed', event: 'gen-loose' },
            { action: 'Briefing (PAX/Approach/TEM', check: 'Completed', event: 'gen-app-brief'}
        ]
    },
    {
        id: 'circuit',
        name: 'Circuit',
        items: [
            { action: 'In', check: 'White band', event: 'asi-white', memory: true},
            { action: 'Flaps', check: '1st notch', event: 'flp-one', memory: true},
            { action: 'Power', check: '50%', event: 'thr-50', memory: true},
            { action: 'Speed', check: '80kts', event: 'asi-80', memory: true},
            { action: 'Landing light', check: 'ON', event: 'ldg-on', memory: true},
            { action: 'Power', check: '25%', event: 'thr-25', memory: true},
            { action: 'Speed', check: '75kts', event: 'asi-75', memory: true},
            { action: 'Flaps', check: '2nd notch', event: 'flp-two', memory: true},
            { action: 'Speed', check: '70kts', event: 'asi-70', memory: true}
        ]
    },
    {
        id: 'after-ldg',
        name: 'After Landing',
        items: [
            { action: 'Flaps', check: 'Retracted', event: 'flp-up', memory: true},
            { action: 'Electric fuel pump', check: 'OFF', event: 'fp-off', memory: true},
            { action: 'Landing Light', check: 'OFF', event: 'ldg-off', memory: true},
            { action: 'Taxi Light', check: 'As required', event: 'taxi-rq', memory: true},
            { action: 'Navigation Lights', check: 'As required', event: 'nav-rq', memory: true},
            { action: 'Pitot Heat', check: 'OFF', event: 'pitot-off', memory: true},
            { action: 'Transponder', check: 'STBY/GND', event: 'tx-stby', memory: true},
        ]
    },
    {
        id: 'shutdown',
        name: 'Engine Shut-Down',
        items: [
            { action: 'Power', check: 'Idle for 1 min', event: 'thr-00'},
            { action: 'Parking brake', check: 'Set', event: 'brk-set'},
            { action: 'Taxi Light', check: 'OFF', event: 'taxi-off'},
            { action: 'Navigation Lights', check: 'OFF', event: 'nav-off'},
            { action: 'Instrument Lights', check: 'OFF', event: 'instr-off'},
            { action: 'Avionics master switch', check: 'OFF', event: 'ams-off'},
            { action: 'Engine master switch', check: 'OFF', event: 'eng-off'},
            { action: 'Key', check: 'Removed', event: 'key-rem'},
            { action: 'Strobe lights', check: 'OFF', event: 'strb-off'},
            { action: 'Battery Switch', check: 'OFF', event: 'bat-off'},
            { action: 'Flaps', check: 'Full', event: 'flp-two'},
            { action: 'Fuel selector', check: 'Do not close', event: 'ftv-on'},
        ]
    },
    {
        id: 'engine-failure',
        name: 'Engine Failure (in flight)',
        items: [
            { action: 'Electrical Fuel Pump', check: 'ON', event: 'fp-on', memory: true},
            { action: 'Glide Speed (flaps up)', check: '80kts', event: 'asi-80', memory: true},
            { action: 'FADEC A/B Switch', check: 'Force B', event: 'force-b-on', memory: true},
            { action: '', check: '', event: 'force-b-auto', memory: true},
            { action: 'Power Lever', check: 'Max Power', event: 'thr-100', memory: true},
            { action: 'Engine Master Switch', check: 'Off, then ON', event: 'eng-off', memory: true},
            { action: '', check: '', event: 'eng-on', memory: true},
            { action: 'Battery switch', check: 'ON', event: 'bat-on', memory: true},
            { action: 'Alternator Circuit Breaker', check: 'IN', event: 'alt-brk-in', memory: true},
            { action: 'Circuit Breakers', check: 'All in', event: 'cb-in', memory: true},
            { action: 'Fuel selector', check: 'ON', event: 'ftv-on', memory: true},
            { action: 'Alternate Induction Air', check: 'OPEN', event: 'aia-open', memory: true},
            { action: 'Key/Starter (if not running)', check: 'OFF then restart', event: 'key-off', memory: true},
            { action: '', check: '', event: 'key-start', memory: true},
            { action: 'Seatbelts & Harnesses', check: 'Tight', event: 'gen-belts', memory: true},
            { action: 'Fuel Selector', check: 'OFF', event: 'ftv-off', memory: true},
            { action: 'Engine Master Switch', check: 'OFF', event: 'eng-off', memory: true},
            { action: 'Battery Master Switch', check: 'OFF', event: 'bat-off', memory: true},
            { action: 'Canopy', check: 'Unlocked', event: 'gen-canopy-unlock', memory: true},
        ]
    },
    {
        id: 'fadec-flash',
        name: 'FADEC light A or B flashing',
        items: [
            { action: 'FADEC test button', check: 'Press at least 2 sec.', event: 'fadec-check-fault'}
        ]
    },
    {
        id: 'alt-warning',
        name: 'ALT warning light ON',
        items: [
            { action: 'Alternator Circuit Breaker', check: 'Pull OUT, then IN', event: 'alt-brk-pull'},
            { action: '', check: '', event: 'alt-brk-in'},
            { action: 'Voltmeter', check: 'In green', event: 'wqi-volt-green'}
        ]
    },
    {
        id: 'elec-fire-smoke',
        name: 'Electrical Fire/Smoke (in flight)',
        items: [
            { action: 'Battery Switch', check: 'Leave ON', event: 'bat-on'},
            { action: 'Alternator Circuit Breaker', check: 'Leave IN', event: 'alt-brk-in'},
            { action: 'Electrical equipment', check: 'All off', event: 'radio-off'},
            { action: '', check: '', event: 'tx-off'},
            { action: 'Cabin Ventilation/Cabin Heat', check: 'OFF', event: 'ch-off'},
            { action: '', check: '', event: 'chc-off'}
        ]
    }
];


let current_section = 0;
let current_item = 0;

let body_element = null;
let popup_element = null;

function load_ipt() {
    body_element = document.querySelector('body');

    body_element.addEventListener('click', (e) => {
        if (popup_element && e.target.offsetParent != popup_element) {
            popup_element.remove();
            popup_element = null;
        }
    });

    install_click_map();
    install_checklist();
}

function install_click_map() {
    const cockpit_div = document.getElementById('cockpit-area');
    const img = cockpit_div.querySelector('img');
    img.useMap = '#cockpit_map';

    const cockpit_map = document.createElement('map');
    cockpit_map.name = 'cockpit_map';
    cockpit_div.append(cockpit_map);

    cockpit_data.forEach((entry) => {
        const area = document.createElement('area');

        area.alt = entry.name;
        area.title = entry.name;
        area.onclick = area_clicked;
        area.coords = entry.clickmap.coords;
        area.shape = entry.clickmap.shape;

        cockpit_map.append(area);
    });

}

function install_checklist() {
    const chk_select = document.getElementById('checklist-selection');
    const chk_show_memory = document.getElementById('checklist-show-memory');
    const chk_reset = document.getElementById('checklist-reset');

    const chk_prev = document.getElementById('checklist-prev');
    const chk_next = document.getElementById('checklist-next');

    checklist.forEach(section => {
        const option = document.createElement('option');
        option.value = section.id;
        option.innerText = section.name;
        chk_select.append(option);
    });

    chk_select.onchange = update_checklist_content;
    chk_show_memory.onchange = update_checklist_content;
    chk_reset.onclick = update_checklist_content;
    update_checklist_content();

    chk_prev.onclick = prev_checklist;
    chk_next.onclick = next_checklist;
}

let row_pointers = [];

function prev_checklist() {
    const chk_select = document.getElementById('checklist-selection');
    const new_idx = chk_select.selectedIndex - 1;
    chk_select.selectedIndex = Math.max(new_idx, 0);
    update_checklist_content();
}

function next_checklist() {
    const chk_select = document.getElementById('checklist-selection');
    const new_idx = chk_select.selectedIndex + 1;
    chk_select.selectedIndex = Math.min(new_idx, chk_select.length-1);
    update_checklist_content();
}

function update_checklist_content() {
    const chk_select = document.getElementById('checklist-selection');
    const chk_content = document.getElementById('checklist-content');
    const chk_show_memory = document.getElementById('checklist-show-memory');

    row_pointers = [];
    current_item = 0;
    current_section = chk_select.selectedIndex;

    const section = checklist[current_section];

    chk_content.innerHTML = '';

    section.items.forEach(entry => {
        const row = document.createElement('tr');
        const action = document.createElement('td');
        const check = document.createElement('td');

        action.innerText = entry.action;
        check.innerText = entry.check;

        if (entry?.memory) {
            row.classList.add('memory');

            if (!chk_show_memory.checked) {
                row.classList.add('hidden');
            }
        }

        row.append(action);
        row.append(check);
        chk_content.append(row);
        row_pointers.push(row);
    });
}

function area_clicked(event) {
    event.stopPropagation();
    
    const cockpit_object = cockpit_data.find(el => el.name === event.srcElement.title);

    show_popup(event.clientX, event.clientY, cockpit_object);
}

function popup_click(action) {
    
    if (popup_element) popup_element.remove();
    popup_element = null;

    const checklist_ = checklist[current_section].items;

    if (current_item < checklist_.length) {
        
        if (action == checklist_[current_item].event) {
            row_pointers[current_item].classList.add('checked');
            current_item += 1;

            if (current_item == checklist_.length){
                window.alert('Checklist complete!');
            }
        }
        else {
            window.alert('Nope, that is not correct.');
        }
    }
}

function show_popup(xx, yy, cockpit_object) {

    const entries = cockpit_object.events;

    if (popup_element) popup_element.remove();

    popup_element = document.createElement('div');
    popup_element.id = 'context-menu';
    popup_element.style.top = `${yy}px`;
    popup_element.style.left = `${xx}px`;

    if (entries) {
        for (const key in entries) {
            entry = document.createElement('div');
            entry.className = 'item';
            entry.innerHTML = entries[key]; // + ' [' + key + ']';
            entry.onclick = (e) => { popup_click(key); };
            popup_element.append(entry);
        }
    }
    else {
        entry = document.createElement('div');
        entry.className = 'item';
        entry.innerHTML = 'Undefined';
        popup_element.append(entry);
    }


    body_element.append(popup_element);
}



