import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Nifty } from '../model/nifty.model';


@Injectable({
    providedIn: 'root'
  })
export class NiftyDataService {

    private nifty : Nifty[];
    constructor() {
        this.nifty = [
            {
              "companyName": "ACC Ltd.",
              "industry": "CEMENT & CEMENT PRODUCTS",
              "symbol": "ACC",
              "series": "EQ",
              "isinCode": "INE012A01025",
            },
            {
              "companyName": "AU Small Finance Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "AUBANK",
              "series": "EQ",
              "isinCode": "INE949L01017",
            },
            {
              "companyName": "Aarti Industries Ltd.",
              "industry": "CHEMICALS",
              "symbol": "AARTIIND",
              "series": "EQ",
              "isinCode": "INE769A01020"
            },
            {
              "companyName": "Abbott India Ltd.",
              "industry": "PHARMA",
              "symbol": "ABBOTINDIA",
              "series": "EQ",
              "isinCode": "INE358A01014"
            },
            {
              "companyName": "Adani Enterprises Ltd.",
              "industry": "SERVICES",
              "symbol": "ADANIENT",
              "series": "EQ",
              "isinCode": "INE423A01024"
            },
            {
              "companyName": "Adani Gas Ltd.",
              "industry": "OIL & GAS",
              "symbol": "ADANIGAS",
              "series": "EQ",
              "isinCode": "INE399L01023"
            },
            {
              "companyName": "Adani Green Energy Ltd.",
              "industry": "POWER",
              "symbol": "ADANIGREEN",
              "series": "EQ",
              "isinCode": "INE364U01010"
            },
            {
              "companyName": "Adani Ports and Special Economic Zone Ltd.",
              "industry": "SERVICES",
              "symbol": "ADANIPORTS",
              "series": "EQ",
              "isinCode": "INE742F01042"
            },
            {
              "companyName": "Adani Transmission Ltd.",
              "industry": "POWER",
              "symbol": "ADANITRANS",
              "series": "EQ",
              "isinCode": "INE931S01010"
            },
            {
              "companyName": "Aditya Birla Capital Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "ABCAPITAL",
              "series": "EQ",
              "isinCode": "INE674K01013"
            },
            {
              "companyName": "Aditya Birla Fashion and Retail Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "ABFRL",
              "series": "EQ",
              "isinCode": "INE647O01011"
            },
            {
              "companyName": "Ajanta Pharmaceuticals Ltd.",
              "industry": "PHARMA",
              "symbol": "AJANTPHARM",
              "series": "EQ",
              "isinCode": "INE031B01049"
            },
            {
              "companyName": "Alembic Pharmaceuticals Ltd.",
              "industry": "PHARMA",
              "symbol": "APLLTD",
              "series": "EQ",
              "isinCode": "INE901L01018"
            },
            {
              "companyName": "Alkem Laboratories Ltd.",
              "industry": "PHARMA",
              "symbol": "ALKEM",
              "series": "EQ",
              "isinCode": "INE540L01014"
            },
            {
              "companyName": "Amara Raja Batteries Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "AMARAJABAT",
              "series": "EQ",
              "isinCode": "INE885A01032"
            },
            {
              "companyName": "Ambuja Cements Ltd.",
              "industry": "CEMENT & CEMENT PRODUCTS",
              "symbol": "AMBUJACEM",
              "series": "EQ",
              "isinCode": "INE079A01024"
            },
            {
              "companyName": "Apollo Hospitals Enterprise Ltd.",
              "industry": "HEALTHCARE SERVICES",
              "symbol": "APOLLOHOSP",
              "series": "EQ",
              "isinCode": "INE437A01024"
            },
            {
              "companyName": "Apollo Tyres Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "APOLLOTYRE",
              "series": "EQ",
              "isinCode": "INE438A01022"
            },
            {
              "companyName": "Ashok Leyland Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "ASHOKLEY",
              "series": "EQ",
              "isinCode": "INE208A01029"
            },
            {
              "companyName": "Asian Paints Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "ASIANPAINT",
              "series": "EQ",
              "isinCode": "INE021A01026"
            },
            {
              "companyName": "Aurobindo Pharma Ltd.",
              "industry": "PHARMA",
              "symbol": "AUROPHARMA",
              "series": "EQ",
              "isinCode": "INE406A01037"
            },
            {
              "companyName": "Avenue Supermarts Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "DMART",
              "series": "EQ",
              "isinCode": "INE192R01011"
            },
            {
              "companyName": "Axis Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "AXISBANK",
              "series": "EQ",
              "isinCode": "INE238A01034"
            },
            {
              "companyName": "Bajaj Auto Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "BAJAJ-AUTO",
              "series": "EQ",
              "isinCode": "INE917I01010"
            },
            {
              "companyName": "Bajaj Finance Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "BAJFINANCE",
              "series": "EQ",
              "isinCode": "INE296A01024"
            },
            {
              "companyName": "Bajaj Finserv Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "BAJAJFINSV",
              "series": "EQ",
              "isinCode": "INE918I01018"
            },
            {
              "companyName": "Bajaj Holdings & Investment Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "BAJAJHLDNG",
              "series": "EQ",
              "isinCode": "INE118A01012"
            },
            {
              "companyName": "Balkrishna Industries Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "BALKRISIND",
              "series": "EQ",
              "isinCode": "INE787D01026"
            },
            {
              "companyName": "Bandhan Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "BANDHANBNK",
              "series": "EQ",
              "isinCode": "INE545U01014"
            },
            {
              "companyName": "Bank of Baroda",
              "industry": "FINANCIAL SERVICES",
              "symbol": "BANKBARODA",
              "series": "EQ",
              "isinCode": "INE028A01039"
            },
            {
              "companyName": "Bank of India",
              "industry": "FINANCIAL SERVICES",
              "symbol": "BANKINDIA",
              "series": "EQ",
              "isinCode": "INE084A01016"
            },
            {
              "companyName": "Bata India Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "BATAINDIA",
              "series": "EQ",
              "isinCode": "INE176A01028"
            },
            {
              "companyName": "Berger Paints India Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "BERGEPAINT",
              "series": "EQ",
              "isinCode": "INE463A01038"
            },
            {
              "companyName": "Bharat Electronics Ltd.",
              "industry": "INDUSTRIAL MANUFACTURING",
              "symbol": "BEL",
              "series": "EQ",
              "isinCode": "INE263A01024"
            },
            {
              "companyName": "Bharat Forge Ltd.",
              "industry": "INDUSTRIAL MANUFACTURING",
              "symbol": "BHARATFORG",
              "series": "EQ",
              "isinCode": "INE465A01025"
            },
            {
              "companyName": "Bharat Heavy Electricals Ltd.",
              "industry": "INDUSTRIAL MANUFACTURING",
              "symbol": "BHEL",
              "series": "EQ",
              "isinCode": "INE257A01026"
            },
            {
              "companyName": "Bharat Petroleum Corporation Ltd.",
              "industry": "OIL & GAS",
              "symbol": "BPCL",
              "series": "EQ",
              "isinCode": "INE029A01011"
            },
            {
              "companyName": "Bharti Airtel Ltd.",
              "industry": "TELECOM",
              "symbol": "BHARTIARTL",
              "series": "EQ",
              "isinCode": "INE397D01024"
            },
            {
              "companyName": "Bharti Infratel Ltd.",
              "industry": "TELECOM",
              "symbol": "INFRATEL",
              "series": "EQ",
              "isinCode": "INE121J01017"
            },
            {
              "companyName": "Biocon Ltd.",
              "industry": "PHARMA",
              "symbol": "BIOCON",
              "series": "EQ",
              "isinCode": "INE376G01013"
            },
            {
              "companyName": "Bombay Burmah Trading Corporation Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "BBTC",
              "series": "EQ",
              "isinCode": "INE050A01025"
            },
            {
              "companyName": "Bosch Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "BOSCHLTD",
              "series": "EQ",
              "isinCode": "INE323A01026"
            },
            {
              "companyName": "Britannia Industries Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "BRITANNIA",
              "series": "EQ",
              "isinCode": "INE216A01030"
            },
            {
              "companyName": "CESC Ltd.",
              "industry": "POWER",
              "symbol": "CESC",
              "series": "EQ",
              "isinCode": "INE486A01013"
            },
            {
              "companyName": "Cadila Healthcare Ltd.",
              "industry": "PHARMA",
              "symbol": "CADILAHC",
              "series": "EQ",
              "isinCode": "INE010B01027"
            },
            {
              "companyName": "Canara Bank",
              "industry": "FINANCIAL SERVICES",
              "symbol": "CANBK",
              "series": "EQ",
              "isinCode": "INE476A01014"
            },
            {
              "companyName": "Castrol India Ltd.",
              "industry": "OIL & GAS",
              "symbol": "CASTROLIND",
              "series": "EQ",
              "isinCode": "INE172A01027"
            },
            {
              "companyName": "Cholamandalam Investment and Finance Company Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "CHOLAFIN",
              "series": "EQ",
              "isinCode": "INE121A01024"
            },
            {
              "companyName": "Cipla Ltd.",
              "industry": "PHARMA",
              "symbol": "CIPLA",
              "series": "EQ",
              "isinCode": "INE059A01026"
            },
            {
              "companyName": "City Union Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "CUB",
              "series": "EQ",
              "isinCode": "INE491A01021"
            },
            {
              "companyName": "Coal India Ltd.",
              "industry": "METALS",
              "symbol": "COALINDIA",
              "series": "EQ",
              "isinCode": "INE522F01014"
            },
            {
              "companyName": "Coforge Ltd.",
              "industry": "IT",
              "symbol": "COFORGE",
              "series": "EQ",
              "isinCode": "INE591G01017"
            },
            {
              "companyName": "Colgate Palmolive (India) Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "COLPAL",
              "series": "EQ",
              "isinCode": "INE259A01022"
            },
            {
              "companyName": "Container Corporation of India Ltd.",
              "industry": "SERVICES",
              "symbol": "CONCOR",
              "series": "EQ",
              "isinCode": "INE111A01025"
            },
            {
              "companyName": "Coromandel International Ltd.",
              "industry": "FERTILISERS & PESTICIDES",
              "symbol": "COROMANDEL",
              "series": "EQ",
              "isinCode": "INE169A01031"
            },
            {
              "companyName": "Crompton Greaves Consumer Electricals Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "CROMPTON",
              "series": "EQ",
              "isinCode": "INE299U01018"
            },
            {
              "companyName": "Cummins India Ltd.",
              "industry": "INDUSTRIAL MANUFACTURING",
              "symbol": "CUMMINSIND",
              "series": "EQ",
              "isinCode": "INE298A01020"
            },
            {
              "companyName": "DLF Ltd.",
              "industry": "CONSTRUCTION",
              "symbol": "DLF",
              "series": "EQ",
              "isinCode": "INE271C01023"
            },
            {
              "companyName": "Dabur India Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "DABUR",
              "series": "EQ",
              "isinCode": "INE016A01026"
            },
            {
              "companyName": "Dalmia Bharat Ltd.",
              "industry": "CEMENT & CEMENT PRODUCTS",
              "symbol": "DALBHARAT",
              "series": "EQ",
              "isinCode": "INE00R701025"
            },
            {
              "companyName": "Divi's Laboratories Ltd.",
              "industry": "PHARMA",
              "symbol": "DIVISLAB",
              "series": "EQ",
              "isinCode": "INE361B01024"
            },
            {
              "companyName": "Dr. Lal Path Labs Ltd.",
              "industry": "HEALTHCARE SERVICES",
              "symbol": "LALPATHLAB",
              "series": "EQ",
              "isinCode": "INE600L01024"
            },
            {
              "companyName": "Dr. Reddy's Laboratories Ltd.",
              "industry": "PHARMA",
              "symbol": "DRREDDY",
              "series": "EQ",
              "isinCode": "INE089A01023"
            },
            {
              "companyName": "Edelweiss Financial Services Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "EDELWEISS",
              "series": "EQ",
              "isinCode": "INE532F01054"
            },
            {
              "companyName": "Eicher Motors Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "EICHERMOT",
              "series": "EQ",
              "isinCode": "INE066A01021"
            },
            {
              "companyName": "Emami Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "EMAMILTD",
              "series": "EQ",
              "isinCode": "INE548C01032"
            },
            {
              "companyName": "Endurance Technologies Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "ENDURANCE",
              "series": "EQ",
              "isinCode": "INE913H01037"
            },
            {
              "companyName": "Escorts Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "ESCORTS",
              "series": "EQ",
              "isinCode": "INE042A01014"
            },
            {
              "companyName": "Exide Industries Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "EXIDEIND",
              "series": "EQ",
              "isinCode": "INE302A01020"
            },
            {
              "companyName": "Federal Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "FEDERALBNK",
              "series": "EQ",
              "isinCode": "INE171A01029"
            },
            {
              "companyName": "Fortis Healthcare Ltd.",
              "industry": "HEALTHCARE SERVICES",
              "symbol": "FORTIS",
              "series": "EQ",
              "isinCode": "INE061F01013"
            },
            {
              "companyName": "Future Retail Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "FRETAIL",
              "series": "EQ",
              "isinCode": "INE752P01024"
            },
            {
              "companyName": "GAIL (India) Ltd.",
              "industry": "OIL & GAS",
              "symbol": "GAIL",
              "series": "EQ",
              "isinCode": "INE129A01019"
            },
            {
              "companyName": "GMR Infrastructure Ltd.",
              "industry": "CONSTRUCTION",
              "symbol": "GMRINFRA",
              "series": "EQ",
              "isinCode": "INE776C01039"
            },
            {
              "companyName": "General Insurance Corporation of India",
              "industry": "FINANCIAL SERVICES",
              "symbol": "GICRE",
              "series": "EQ",
              "isinCode": "INE481Y01014"
            },
            {
              "companyName": "Glenmark Pharmaceuticals Ltd.",
              "industry": "PHARMA",
              "symbol": "GLENMARK",
              "series": "EQ",
              "isinCode": "INE935A01035"
            },
            {
              "companyName": "Godrej Agrovet Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "GODREJAGRO",
              "series": "EQ",
              "isinCode": "INE850D01014"
            },
            {
              "companyName": "Godrej Consumer Products Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "GODREJCP",
              "series": "EQ",
              "isinCode": "INE102D01028"
            },
            {
              "companyName": "Godrej Industries Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "GODREJIND",
              "series": "EQ",
              "isinCode": "INE233A01035"
            },
            {
              "companyName": "Godrej Properties Ltd.",
              "industry": "CONSTRUCTION",
              "symbol": "GODREJPROP",
              "series": "EQ",
              "isinCode": "INE484J01027"
            },
            {
              "companyName": "Grasim Industries Ltd.",
              "industry": "CEMENT & CEMENT PRODUCTS",
              "symbol": "GRASIM",
              "series": "EQ",
              "isinCode": "INE047A01021"
            },
            {
              "companyName": "Gujarat Gas Ltd.",
              "industry": "OIL & GAS",
              "symbol": "GUJGASLTD",
              "series": "EQ",
              "isinCode": "INE844O01030"
            },
            {
              "companyName": "Gujarat State Petronet Ltd.",
              "industry": "OIL & GAS",
              "symbol": "GSPL",
              "series": "EQ",
              "isinCode": "INE246F01010"
            },
            {
              "companyName": "HCL Technologies Ltd.",
              "industry": "IT",
              "symbol": "HCLTECH",
              "series": "EQ",
              "isinCode": "INE860A01027"
            },
            {
              "companyName": "HDFC Asset Management Company Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "HDFCAMC",
              "series": "EQ",
              "isinCode": "INE127D01025"
            },
            {
              "companyName": "HDFC Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "HDFCBANK",
              "series": "EQ",
              "isinCode": "INE040A01034"
            },
            {
              "companyName": "HDFC Life Insurance Company Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "HDFCLIFE",
              "series": "EQ",
              "isinCode": "INE795G01014"
            },
            {
              "companyName": "Havells India Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "HAVELLS",
              "series": "EQ",
              "isinCode": "INE176B01034"
            },
            {
              "companyName": "Hero MotoCorp Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "HEROMOTOCO",
              "series": "EQ",
              "isinCode": "INE158A01026"
            },
            {
              "companyName": "Hindalco Industries Ltd.",
              "industry": "METALS",
              "symbol": "HINDALCO",
              "series": "EQ",
              "isinCode": "INE038A01020"
            },
            {
              "companyName": "Hindustan Petroleum Corporation Ltd.",
              "industry": "OIL & GAS",
              "symbol": "HINDPETRO",
              "series": "EQ",
              "isinCode": "INE094A01015"
            },
            {
              "companyName": "Hindustan Unilever Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "HINDUNILVR",
              "series": "EQ",
              "isinCode": "INE030A01027"
            },
            {
              "companyName": "Hindustan Zinc Ltd.",
              "industry": "METALS",
              "symbol": "HINDZINC",
              "series": "EQ",
              "isinCode": "INE267A01025"
            },
            {
              "companyName": "Housing & Urban Development Corporation Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "HUDCO",
              "series": "EQ",
              "isinCode": "INE031A01017"
            },
            {
              "companyName": "Housing Development Finance Corporation Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "HDFC",
              "series": "EQ",
              "isinCode": "INE001A01036"
            },
            {
              "companyName": "ICICI Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "ICICIBANK",
              "series": "EQ",
              "isinCode": "INE090A01021"
            },
            {
              "companyName": "ICICI Lombard General Insurance Company Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "ICICIGI",
              "series": "EQ",
              "isinCode": "INE765G01017"
            },
            {
              "companyName": "ICICI Prudential Life Insurance Company Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "ICICIPRULI",
              "series": "EQ",
              "isinCode": "INE726G01019"
            },
            {
              "companyName": "ICICI Securities Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "ISEC",
              "series": "EQ",
              "isinCode": "INE763G01038"
            },
            {
              "companyName": "IDFC First Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "IDFCFIRSTB",
              "series": "EQ",
              "isinCode": "INE092T01019"
            },
            {
              "companyName": "ITC Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "ITC",
              "series": "EQ",
              "isinCode": "INE154A01025"
            },
            {
              "companyName": "Indiabulls Housing Finance Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "IBULHSGFIN",
              "series": "EQ",
              "isinCode": "INE148I01020"
            },
            {
              "companyName": "Indiabulls Ventures Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "IBVENTURES",
              "series": "EQ",
              "isinCode": "INE274G01010"
            },
            {
              "companyName": "Indian Hotels Co. Ltd.",
              "industry": "SERVICES",
              "symbol": "INDHOTEL",
              "series": "EQ",
              "isinCode": "INE053A01029"
            },
            {
              "companyName": "Indian Oil Corporation Ltd.",
              "industry": "OIL & GAS",
              "symbol": "IOC",
              "series": "EQ",
              "isinCode": "INE242A01010"
            },
            {
              "companyName": "Indian Railway Catering And Tourism Corporation Ltd.",
              "industry": "SERVICES",
              "symbol": "IRCTC",
              "series": "EQ",
              "isinCode": "INE335Y01012"
            },
            {
              "companyName": "Indraprastha Gas Ltd.",
              "industry": "OIL & GAS",
              "symbol": "IGL",
              "series": "EQ",
              "isinCode": "INE203G01027"
            },
            {
              "companyName": "IndusInd Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "INDUSINDBK",
              "series": "EQ",
              "isinCode": "INE095A01012"
            },
            {
              "companyName": "Info Edge (India) Ltd.",
              "industry": "IT",
              "symbol": "NAUKRI",
              "series": "EQ",
              "isinCode": "INE663F01024"
            },
            {
              "companyName": "Infosys Ltd.",
              "industry": "IT",
              "symbol": "INFY",
              "series": "EQ",
              "isinCode": "INE009A01021"
            },
            {
              "companyName": "InterGlobe Aviation Ltd.",
              "industry": "SERVICES",
              "symbol": "INDIGO",
              "series": "EQ",
              "isinCode": "INE646L01027"
            },
            {
              "companyName": "Ipca Laboratories Ltd.",
              "industry": "PHARMA",
              "symbol": "IPCALAB",
              "series": "EQ",
              "isinCode": "INE571A01020"
            },
            {
              "companyName": "JSW Energy Ltd.",
              "industry": "POWER",
              "symbol": "JSWENERGY",
              "series": "EQ",
              "isinCode": "INE121E01018"
            },
            {
              "companyName": "JSW Steel Ltd.",
              "industry": "METALS",
              "symbol": "JSWSTEEL",
              "series": "EQ",
              "isinCode": "INE019A01038"
            },
            {
              "companyName": "Jindal Steel & Power Ltd.",
              "industry": "METALS",
              "symbol": "JINDALSTEL",
              "series": "EQ",
              "isinCode": "INE749A01030"
            },
            {
              "companyName": "Jubilant Foodworks Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "JUBLFOOD",
              "series": "EQ",
              "isinCode": "INE797F01012"
            },
            {
              "companyName": "Kotak Mahindra Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "KOTAKBANK",
              "series": "EQ",
              "isinCode": "INE237A01028"
            },
            {
              "companyName": "L&T Finance Holdings Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "L&TFH",
              "series": "EQ",
              "isinCode": "INE498L01015"
            },
            {
              "companyName": "L&T Technology Services Ltd.",
              "industry": "IT",
              "symbol": "LTTS",
              "series": "EQ",
              "isinCode": "INE010V01017"
            },
            {
              "companyName": "LIC Housing Finance Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "LICHSGFIN",
              "series": "EQ",
              "isinCode": "INE115A01026"
            },
            {
              "companyName": "Larsen & Toubro Infotech Ltd.",
              "industry": "IT",
              "symbol": "LTI",
              "series": "EQ",
              "isinCode": "INE214T01019"
            },
            {
              "companyName": "Larsen & Toubro Ltd.",
              "industry": "CONSTRUCTION",
              "symbol": "LT",
              "series": "EQ",
              "isinCode": "INE018A01030"
            },
            {
              "companyName": "Lupin Ltd.",
              "industry": "PHARMA",
              "symbol": "LUPIN",
              "series": "EQ",
              "isinCode": "INE326A01037"
            },
            {
              "companyName": "MRF Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "MRF",
              "series": "EQ",
              "isinCode": "INE883A01011"
            },
            {
              "companyName": "Mahanagar Gas Ltd.",
              "industry": "OIL & GAS",
              "symbol": "MGL",
              "series": "EQ",
              "isinCode": "INE002S01010"
            },
            {
              "companyName": "Mahindra & Mahindra Financial Services Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "M&MFIN",
              "series": "EQ",
              "isinCode": "INE774D01024"
            },
            {
              "companyName": "Mahindra & Mahindra Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "M&M",
              "series": "EQ",
              "isinCode": "INE101A01026"
            },
            {
              "companyName": "Manappuram Finance Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "MANAPPURAM",
              "series": "EQ",
              "isinCode": "INE522D01027"
            },
            {
              "companyName": "Marico Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "MARICO",
              "series": "EQ",
              "isinCode": "INE196A01026"
            },
            {
              "companyName": "Maruti Suzuki India Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "MARUTI",
              "series": "EQ",
              "isinCode": "INE585B01010"
            },
            {
              "companyName": "Max Financial Services Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "MFSL",
              "series": "EQ",
              "isinCode": "INE180A01020"
            },
            {
              "companyName": "MindTree Ltd.",
              "industry": "IT",
              "symbol": "MINDTREE",
              "series": "EQ",
              "isinCode": "INE018I01017"
            },
            {
              "companyName": "Motherson Sumi Systems Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "MOTHERSUMI",
              "series": "EQ",
              "isinCode": "INE775A01035"
            },
            {
              "companyName": "MphasiS Ltd.",
              "industry": "IT",
              "symbol": "MPHASIS",
              "series": "EQ",
              "isinCode": "INE356A01018"
            },
            {
              "companyName": "Muthoot Finance Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "MUTHOOTFIN",
              "series": "EQ",
              "isinCode": "INE414G01012"
            },
            {
              "companyName": "NATCO Pharma Ltd.",
              "industry": "PHARMA",
              "symbol": "NATCOPHARM",
              "series": "EQ",
              "isinCode": "INE987B01026"
            },
            {
              "companyName": "NMDC Ltd.",
              "industry": "METALS",
              "symbol": "NMDC",
              "series": "EQ",
              "isinCode": "INE584A01023"
            },
            {
              "companyName": "NTPC Ltd.",
              "industry": "POWER",
              "symbol": "NTPC",
              "series": "EQ",
              "isinCode": "INE733E01010"
            },
            {
              "companyName": "National Aluminium Co. Ltd.",
              "industry": "METALS",
              "symbol": "NATIONALUM",
              "series": "EQ",
              "isinCode": "INE139A01034"
            },
            {
              "companyName": "Navin Fluorine International Ltd.",
              "industry": "CHEMICALS",
              "symbol": "NAVINFLUOR",
              "series": "EQ",
              "isinCode": "INE048G01026"
            },
            {
              "companyName": "Nestle India Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "NESTLEIND",
              "series": "EQ",
              "isinCode": "INE239A01016"
            },
            {
              "companyName": "Nippon Life India Asset Management Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "NAM-INDIA",
              "series": "EQ",
              "isinCode": "INE298J01013"
            },
            {
              "companyName": "Oberoi Realty Ltd.",
              "industry": "CONSTRUCTION",
              "symbol": "OBEROIRLTY",
              "series": "EQ",
              "isinCode": "INE093I01010"
            },
            {
              "companyName": "Oil & Natural Gas Corporation Ltd.",
              "industry": "OIL & GAS",
              "symbol": "ONGC",
              "series": "EQ",
              "isinCode": "INE213A01029"
            },
            {
              "companyName": "Oil India Ltd.",
              "industry": "OIL & GAS",
              "symbol": "OIL",
              "series": "EQ",
              "isinCode": "INE274J01014"
            },
            {
              "companyName": "Oracle Financial Services Software Ltd.",
              "industry": "IT",
              "symbol": "OFSS",
              "series": "EQ",
              "isinCode": "INE881D01027"
            },
            {
              "companyName": "PI Industries Ltd.",
              "industry": "FERTILISERS & PESTICIDES",
              "symbol": "PIIND",
              "series": "EQ",
              "isinCode": "INE603J01030"
            },
            {
              "companyName": "Page Industries Ltd.",
              "industry": "TEXTILES",
              "symbol": "PAGEIND",
              "series": "EQ",
              "isinCode": "INE761H01022"
            },
            {
              "companyName": "Petronet LNG Ltd.",
              "industry": "OIL & GAS",
              "symbol": "PETRONET",
              "series": "EQ",
              "isinCode": "INE347G01014"
            },
            {
              "companyName": "Pfizer Ltd.",
              "industry": "PHARMA",
              "symbol": "PFIZER",
              "series": "EQ",
              "isinCode": "INE182A01018"
            },
            {
              "companyName": "Pidilite Industries Ltd.",
              "industry": "CHEMICALS",
              "symbol": "PIDILITIND",
              "series": "EQ",
              "isinCode": "INE318A01026"
            },
            {
              "companyName": "Piramal Enterprises Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "PEL",
              "series": "EQ",
              "isinCode": "INE140A01024"
            },
            {
              "companyName": "Polycab India Ltd.",
              "industry": "INDUSTRIAL MANUFACTURING",
              "symbol": "POLYCAB",
              "series": "EQ",
              "isinCode": "INE455K01017"
            },
            {
              "companyName": "Power Finance Corporation Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "PFC",
              "series": "EQ",
              "isinCode": "INE134E01011"
            },
            {
              "companyName": "Power Grid Corporation of India Ltd.",
              "industry": "POWER",
              "symbol": "POWERGRID",
              "series": "EQ",
              "isinCode": "INE752E01010"
            },
            {
              "companyName": "Prestige Estates Projects Ltd.",
              "industry": "CONSTRUCTION",
              "symbol": "PRESTIGE",
              "series": "EQ",
              "isinCode": "INE811K01011"
            },
            {
              "companyName": "Procter & Gamble Hygiene & Health Care Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "PGHH",
              "series": "EQ",
              "isinCode": "INE179A01014"
            },
            {
              "companyName": "Punjab National Bank",
              "industry": "FINANCIAL SERVICES",
              "symbol": "PNB",
              "series": "EQ",
              "isinCode": "INE160A01022"
            },
            {
              "companyName": "RBL Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "RBLBANK",
              "series": "EQ",
              "isinCode": "INE976G01028"
            },
            {
              "companyName": "REC Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "RECLTD",
              "series": "EQ",
              "isinCode": "INE020B01018"
            },
            {
              "companyName": "Rajesh Exports Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "RAJESHEXPO",
              "series": "EQ",
              "isinCode": "INE343B01030"
            },
            {
              "companyName": "Reliance Industries Ltd.",
              "industry": "OIL & GAS",
              "symbol": "RELIANCE",
              "series": "EQ",
              "isinCode": "INE002A01018"
            },
            {
              "companyName": "SBI Cards and Payment Services Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "SBICARD",
              "series": "EQ",
              "isinCode": "INE018E01016"
            },
            {
              "companyName": "SBI Life Insurance Company Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "SBILIFE",
              "series": "EQ",
              "isinCode": "INE123W01016"
            },
            {
              "companyName": "SRF Ltd.",
              "industry": "INDUSTRIAL MANUFACTURING",
              "symbol": "SRF",
              "series": "EQ",
              "isinCode": "INE647A01010"
            },
            {
              "companyName": "Sanofi India Ltd.",
              "industry": "PHARMA",
              "symbol": "SANOFI",
              "series": "EQ",
              "isinCode": "INE058A01010"
            },
            {
              "companyName": "Shree Cement Ltd.",
              "industry": "CEMENT & CEMENT PRODUCTS",
              "symbol": "SHREECEM",
              "series": "EQ",
              "isinCode": "INE070A01015"
            },
            {
              "companyName": "Shriram Transport Finance Co. Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "SRTRANSFIN",
              "series": "EQ",
              "isinCode": "INE721A01013"
            },
            {
              "companyName": "Siemens Ltd.",
              "industry": "INDUSTRIAL MANUFACTURING",
              "symbol": "SIEMENS",
              "series": "EQ",
              "isinCode": "INE003A01024"
            },
            {
              "companyName": "State Bank of India",
              "industry": "FINANCIAL SERVICES",
              "symbol": "SBIN",
              "series": "EQ",
              "isinCode": "INE062A01020"
            },
            {
              "companyName": "Steel Authority of India Ltd.",
              "industry": "METALS",
              "symbol": "SAIL",
              "series": "EQ",
              "isinCode": "INE114A01011"
            },
            {
              "companyName": "Sun Pharmaceutical Industries Ltd.",
              "industry": "PHARMA",
              "symbol": "SUNPHARMA",
              "series": "EQ",
              "isinCode": "INE044A01036"
            },
            {
              "companyName": "Sun TV Network Ltd.",
              "industry": "MEDIA & ENTERTAINMENT",
              "symbol": "SUNTV",
              "series": "EQ",
              "isinCode": "INE424H01027"
            },
            {
              "companyName": "Syngene International Ltd.",
              "industry": "PHARMA",
              "symbol": "SYNGENE",
              "series": "EQ",
              "isinCode": "INE398R01022"
            },
            {
              "companyName": "TVS Motor Company Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "TVSMOTOR",
              "series": "EQ",
              "isinCode": "INE494B01023"
            },
            {
              "companyName": "Tata Chemicals Ltd.",
              "industry": "CHEMICALS",
              "symbol": "TATACHEM",
              "series": "EQ",
              "isinCode": "INE092A01019"
            },
            {
              "companyName": "Tata Consultancy Services Ltd.",
              "industry": "IT",
              "symbol": "TCS",
              "series": "EQ",
              "isinCode": "INE467B01029"
            },
            {
              "companyName": "Tata Consumer Products Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "TATACONSUM",
              "series": "EQ",
              "isinCode": "INE192A01025"
            },
            {
              "companyName": "Tata Motors Ltd.",
              "industry": "AUTOMOBILE",
              "symbol": "TATAMOTORS",
              "series": "EQ",
              "isinCode": "INE155A01022"
            },
            {
              "companyName": "Tata Power Co. Ltd.",
              "industry": "POWER",
              "symbol": "TATAPOWER",
              "series": "EQ",
              "isinCode": "INE245A01021"
            },
            {
              "companyName": "Tata Steel Ltd.",
              "industry": "METALS",
              "symbol": "TATASTEEL",
              "series": "EQ",
              "isinCode": "INE081A01012"
            },
            {
              "companyName": "Tech Mahindra Ltd.",
              "industry": "IT",
              "symbol": "TECHM",
              "series": "EQ",
              "isinCode": "INE669C01036"
            },
            {
              "companyName": "The Ramco Cements Ltd.",
              "industry": "CEMENT & CEMENT PRODUCTS",
              "symbol": "RAMCOCEM",
              "series": "EQ",
              "isinCode": "INE331A01037"
            },
            {
              "companyName": "Titan Company Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "TITAN",
              "series": "EQ",
              "isinCode": "INE280A01028"
            },
            {
              "companyName": "Torrent Pharmaceuticals Ltd.",
              "industry": "PHARMA",
              "symbol": "TORNTPHARM",
              "series": "EQ",
              "isinCode": "INE685A01028"
            },
            {
              "companyName": "Torrent Power Ltd.",
              "industry": "POWER",
              "symbol": "TORNTPOWER",
              "series": "EQ",
              "isinCode": "INE813H01021"
            },
            {
              "companyName": "Trent Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "TRENT",
              "series": "EQ",
              "isinCode": "INE849A01020"
            },
            {
              "companyName": "UPL Ltd.",
              "industry": "FERTILISERS & PESTICIDES",
              "symbol": "UPL",
              "series": "EQ",
              "isinCode": "INE628A01036"
            },
            {
              "companyName": "UltraTech Cement Ltd.",
              "industry": "CEMENT & CEMENT PRODUCTS",
              "symbol": "ULTRACEMCO",
              "series": "EQ",
              "isinCode": "INE481G01011"
            },
            {
              "companyName": "Union Bank of India",
              "industry": "FINANCIAL SERVICES",
              "symbol": "UNIONBANK",
              "series": "EQ",
              "isinCode": "INE692A01016"
            },
            {
              "companyName": "United Breweries Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "UBL",
              "series": "EQ",
              "isinCode": "INE686F01025"
            },
            {
              "companyName": "United Spirits Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "MCDOWELL-N",
              "series": "EQ",
              "isinCode": "INE854D01024"
            },
            {
              "companyName": "V-Guard Industries Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "VGUARD",
              "series": "EQ",
              "isinCode": "INE951I01027"
            },
            {
              "companyName": "Varun Beverages Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "VBL",
              "series": "EQ",
              "isinCode": "INE200M01013"
            },
            {
              "companyName": "Vodafone Idea Ltd.",
              "industry": "TELECOM",
              "symbol": "IDEA",
              "series": "EQ",
              "isinCode": "INE669E01016"
            },
            {
              "companyName": "Voltas Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "VOLTAS",
              "series": "EQ",
              "isinCode": "INE226A01021"
            },
            {
              "companyName": "Whirlpool of India Ltd.",
              "industry": "CONSUMER GOODS",
              "symbol": "WHIRLPOOL",
              "series": "EQ",
              "isinCode": "INE716A01013"
            },
            {
              "companyName": "Wipro Ltd.",
              "industry": "IT",
              "symbol": "WIPRO",
              "series": "EQ",
              "isinCode": "INE075A01022"
            },
            {
              "companyName": "Yes Bank Ltd.",
              "industry": "FINANCIAL SERVICES",
              "symbol": "YESBANK",
              "series": "EQ",
              "isinCode": "INE528G01035"
            },
            {
              "companyName": "Zee Entertainment Enterprises Ltd.",
              "industry": "MEDIA & ENTERTAINMENT",
              "symbol": "ZEEL",
              "series": "EQ",
              "isinCode": "INE256A01028"
            }
          ]
    }
    getCompanies() {
      return this.nifty;
  }
}