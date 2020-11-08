import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Companies } from '../model/companies.model';


@Injectable({
    providedIn: 'root'
  })
export class CompanyDataService {

private companies : Companies[];
constructor() {
    this.companies = [
        {
          id: 1,
          title: 'ADANIPORTS - Adani Ports & Special Economic Zone Ltd. - CONSTRUCTION',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CONSTRUCTION/Adani_Ports_Special_Economic_Zone_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CONSTRUCTION/FundamentalAnalysisOfAdani_Ports_Special_Economic_Zone_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CONSTRUCTION/TechAnalysis_Adani_Ports_Special_Economic_Zone_Ltd.html'
        },
        {
          id: 2,
          title: 'ASIANPAINT - Asian Paints Ltd. - PAINTS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PAINTS/Asian_Paints_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PAINTS/FundamentalAnalysisOfAsian_Paints_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PAINTS/TechAnalysis_Asian_Paints_Ltd.html'
        },
        {
          id: 3,
          title: 'AXISBANK - Axis Bank Ltd. - BANKS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/Axis_Bank_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/FundamentalAnalysisOfAxis_Bank_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/TechAnalysis_Axis_Bank_Ltd.html'
        },
        {
          id: 4,
          title: 'BAJAJ-AUTO - Bajaj Auto Ltd. - AUTOMOBILES - 2 AND 3 WHEELERS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_2_AND_3_WHEELERS/Bajaj_Auto_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_2_AND_3_WHEELERS/FundamentalAnalysisOfBajaj_Auto_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_2_AND_3_WHEELERS/TechAnalysis_Bajaj_Auto_Ltd.html'
        },
        {
          id: 5,
          title: 'BAJAJFINSV - Bajaj Finserv Ltd. - FINANCIAL INSTITUTION',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCIAL_INSTITUTION/Bajaj_Finserv_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCIAL_INSTITUTION/FundamentalAnalysisOfBajaj_Finserv_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCIAL_INSTITUTION/TechAnalysis_Bajaj_Finserv_Ltd.html'
        },
        {
          id: 6,
          title: 'BAJFINANCE - Bajaj Finance - FINANCE',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCE/Bajaj_Finance.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCE/FundamentalAnalysisOfBajaj_Finance.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCE/TechAnalysis_Bajaj_Finance.html'
        },
        {
          id: 7,
          title: 'BHARTIARTL - Bharti Airtel Ltd. - TELECOMMUNICATION - SERVICES',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/TELECOMMUNICATION_SERVICES/Bharti_Airtel_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/TELECOMMUNICATION_SERVICES/FundamentalAnalysisOfBharti_Airtel_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/TELECOMMUNICATION_SERVICES/TechAnalysis_Bharti_Airtel_Ltd.html'
        },
        {
          id: 8,
          title: 'BPCL - Bharat Petroleum Corporation Ltd. - REFINERIES',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/Bharat_Petroleum_Corporation_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/FundamentalAnalysisOfBharat_Petroleum_Corporation_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/TechAnalysis_Bharat_Petroleum_Corporation_Ltd.html'
        },
        {
          id: 9,
          title: 'BRITANNIA - Britannia Industries Ltd. - FOOD AND FOOD PROCESSING',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FOOD_AND_FOOD_PROCESSING/Britannia_Industries_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FOOD_AND_FOOD_PROCESSING/FundamentalAnalysisOfBritannia_Industries_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FOOD_AND_FOOD_PROCESSING/TechAnalysis_Britannia_Industries_Ltd.html'
        },
        {
          id: 10,
          title: 'CIPLA - Cipla Ltd. - PHARMACEUTICALS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/Cipla_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/FundamentalAnalysisOfCipla_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/TechAnalysis_Cipla_Ltd.html'
        },
        {
          id: 11,
          title: 'COALINDIA - Coal India Ltd - MINING',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MINING/Coal_India_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MINING/FundamentalAnalysisOfCoal_India_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MINING/TechAnalysis_Coal_India_Ltd.html'
        },
        {
          id: 12,
          title: 'DRREDDY - Dr. Reddy\'s Laboratories Ltd. - PHARMACEUTICALS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/Dr_Reddys_Laboratories_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/FundamentalAnalysisOfDr_Reddys_Laboratories_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/TechAnalysis_Dr_Reddys_Laboratories_Ltd.html'
        },
        {
          id: 13,
          title: 'EICHERMOT - Eicher Motors Ltd. - AUTOMOBILES - 4 WHEELERS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/Eicher_Motors_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/FundamentalAnalysisOfEicher_Motors_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/TechAnalysis_Eicher_Motors_Ltd.html'
        },
        {
          id: 14,
          title: 'GAIL - GAIL (India) Ltd. - GAS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/GAS/GAIL_(India)_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/GAS/FundamentalAnalysisOfGAIL_(India)_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/GAS/TechAnalysis_GAIL_(India)_Ltd.html'
        },
        {
          id: 15,
          title: 'GRASIM - Grasim Industries Ltd. - CEMENT AND CEMENT PRODUCTS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/Grasim_Industries_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/FundamentalAnalysisOfGrasim_Industries_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/TechAnalysis_Grasim_Industries_Ltd.html'
        },
        {
          id: 16,
          title: 'HCLTECH - HCL Technologies Ltd. - COMPUTERS - SOFTWARE',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/HCL_Technologies_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/FundamentalAnalysisOfHCL_Technologies_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/TechAnalysis_HCL_Technologies_Ltd.html'
        },
        {
          id: 17,
          title: 'HDFC - Housing Development Finance Corporation Ltd. - FINANCE - HOUSING',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCE_HOUSING/Housing_Development_Finance_Corporation_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCE_HOUSING/TechAnalysis_Housing_Development_Finance_Corporation_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FINANCE_HOUSING/TechAnalysis_Housing_Development_Finance_Corporation_Ltd.html'
        },
        {
          id: 18,
          title: 'HDFCBANK - HDFC Bank Ltd. - BANKS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/HDFC_Bank_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/FundamentalAnalysisOfHDFC_Bank_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/TechAnalysis_HDFC_Bank_Ltd.html'
        },
        {
          id: 19,
          title: 'HEROMOTOCO - Hero MotoCorp Ltd. - AUTOMOBILES - 2 AND 3 WHEELERS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_2_AND_3_WHEELERS/Hero_MotoCorp_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_2_AND_3_WHEELERS/FundamentalAnalysisOfHero_MotoCorp_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_2_AND_3_WHEELERS/TechAnalysis_Hero_MotoCorp_Ltd.html'
        },
        {
          id: 20,
          title: 'HINDALCO - Hindalco Industries Ltd. - ALUMINIUM',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/ALUMINIUM/Hindalco_Industries_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/ALUMINIUM/FundamentalAnalysisOfHindalco_Industries_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/ALUMINIUM/TechAnalysis_Hindalco_Industries_Ltd.html'
        },
        {
          id: 21,
          title: 'HINDUNILVR - Hindustan Unilever Ltd. - PERSONAL CARE',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PERSONAL_CARE/Hindustan_Unilever_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PERSONAL_CARE/FundamentalAnalysisOfHindustan_Unilever_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PERSONAL_CARE/TechAnalysis_Hindustan_Unilever_Ltd.html'
        },
        {
          id: 22,
          title: 'ICICIBANK - ICICI Bank Ltd. - BANKS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/ICICI_Bank_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/TechAnalysis_ICICI_Bank_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/TechAnalysis_ICICI_Bank_Ltd.html'
        },
        {
          id: 23,
          title: 'INDUSINDBK - IndusInd Bank Ltd. - BANKS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/IndusInd_Bank_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/FundamentalAnalysisOfIndusInd_Bank_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/TechAnalysis_IndusInd_Bank_Ltd.html'
        },
        {
          id: 24,
          title: 'INFRATEL - Bharti Infratel - TELECOMMUNICATION - EQUIPMENT',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/TELECOMMUNICATION_EQUIPMENT/Bharti_Infratel.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/TELECOMMUNICATION_EQUIPMENT/FundamentalAnalysisOfBharti_Infratel.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/TELECOMMUNICATION_EQUIPMENT/TechAnalysis_Bharti_Infratel.html'
        },
        {
          id: 25,
          title: 'INFY - Infosys Ltd. - COMPUTERS - SOFTWARE',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/Infosys_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/FundamentalAnalysisOfInfosys_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/TechAnalysis_Infosys_Ltd.html'
        },
        {
          id: 26,
          title: 'IOC - Indian Oil Corporation Ltd. - REFINERIES',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/Indian_Oil_Corporation_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/TechAnalysis_Indian_Oil_Corporation_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/TechAnalysis_Indian_Oil_Corporation_Ltd.html'
        },
        {
          id: 27,
          title: 'ITC - I T C Ltd. - CIGARETTES',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CIGARETTES/I_T_C_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CIGARETTES/TechAnalysis_I_T_C_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CIGARETTES/TechAnalysis_I_T_C_Ltd.html'
        },
        {
          id: 28,
          title: 'JSWSTEEL - JSW Steel Ltd. - STEEL AND STEEL PRODUCTS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/STEEL_AND_STEEL_PRODUCTS/JSW_Steel_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/STEEL_AND_STEEL_PRODUCTS/FundamentalAnalysisOfJSW_Steel_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/STEEL_AND_STEEL_PRODUCTS/TechAnalysis_JSW_Steel_Ltd.html'
        },
        {
          id: 29,
          title: 'KOTAKBANK - Kotak Mahindra Bank Ltd. - BANKS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/Kotak_Mahindra_Bank_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/FundamentalAnalysisOfKotak_Mahindra_Bank_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/TechAnalysis_Kotak_Mahindra_Bank_Ltd.html'
        },
        {
          id: 30,
          title: 'LT - Larsen & Toubro Ltd. - ENGINEERING',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/ENGINEERING/Larsen_Toubro_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/ENGINEERING/TechAnalysis_Larsen_Toubro_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/ENGINEERING/TechAnalysis_Larsen_Toubro_Ltd.html'
        },
        {
          id: 31,
          title: 'M&M - Mahindra & Mahindra Ltd. - AUTOMOBILES - 4 WHEELERS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/Mahindra_Mahindra_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/TechAnalysis_Mahindra_Mahindra_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/TechAnalysis_Mahindra_Mahindra_Ltd.html'
        },
        {
          id: 32,
          title: 'MARUTI - Maruti Suzuki India Ltd. - AUTOMOBILES - 4 WHEELERS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/Maruti_Suzuki_India_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/FundamentalAnalysisOfMaruti_Suzuki_India_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/TechAnalysis_Maruti_Suzuki_India_Ltd.html'
        },
        {
          id: 33,
          title: 'NESTLEIND - Nestle India Ltd. - FOOD AND FOOD PROCESSING',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FOOD_AND_FOOD_PROCESSING/Nestle_India_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FOOD_AND_FOOD_PROCESSING/FundamentalAnalysisOfNestle_India_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/FOOD_AND_FOOD_PROCESSING/TechAnalysis_Nestle_India_Ltd.html'
        },
        {
          id: 34,
          title: 'NIFTY_500 - NIFTY 500 - INDEX',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/INDEX/NIFTY_500.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/INDEX/TechAnalysis_NIFTY_500.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/INDEX/TechAnalysis_NIFTY_500.html'
        },
        {
          id: 35,
          title: 'NTPC - NTPC Ltd. - POWER',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/POWER/NTPC_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/POWER/FundamentalAnalysisOfNTPC_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/POWER/TechAnalysis_NTPC_Ltd.html'
        },
        {
          id: 36,
          title: 'ONGC - Oil & Natural Gas Corporation Ltd. - OIL EXPLORATION/PRODUCTION',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/OIL_EXPLORATION_PRODUCTION/Oil_Natural_Gas_Corporation_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/OIL_EXPLORATION_PRODUCTION/FundamentalAnalysisOfOil_Natural_Gas_Corporation_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/OIL_EXPLORATION_PRODUCTION/TechAnalysis_Oil_Natural_Gas_Corporation_Ltd.html'
        },
        {
          id: 37,
          title: 'POWERGRID - Power Grid Corporation of India Ltd. - POWER',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/POWER/Power_Grid_Corporation_of_India_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/POWER/FundamentalAnalysisOfPower_Grid_Corporation_of_India_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/POWER/TechAnalysis_Power_Grid_Corporation_of_India_Ltd.html'
        },
        {
          id: 38,
          title: 'RELIANCE - Reliance Industries Ltd. - REFINERIES',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/Reliance_Industries_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/TechAnalysis_Reliance_Industries_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/REFINERIES/TechAnalysis_Reliance_Industries_Ltd.html'
        },
        {
          id: 39,
          title: 'SBIN - State Bank of India - BANKS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/State_Bank_of_India.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/FundamentalAnalysisOfState_Bank_of_India.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/BANKS/TechAnalysis_State_Bank_of_India.html'
        },
        {
          id: 40,
          title: 'SHREECEM - Shree Cement Ltd. - CEMENT AND CEMENT PRODUCTS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/Shree_Cement_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/FundamentalAnalysisOfShree_Cement_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/TechAnalysis_Shree_Cement_Ltd.html'
        },
        {
          id: 41,
          title: 'SUNPHARMA - Sun Pharmaceutical Industries Ltd. - PHARMACEUTICALS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/Sun_Pharmaceutical_Industries_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/FundamentalAnalysisOfSun_Pharmaceutical_Industries_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PHARMACEUTICALS/TechAnalysis_Sun_Pharmaceutical_Industries_Ltd.html'
        },
        {
          id: 42,
          title: 'TATAMOTORS - Tata Motors Ltd. - AUTOMOBILES - 4 WHEELERS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/Tata_Motors_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/FundamentalAnalysisOfTata_Motors_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/AUTOMOBILES_4_WHEELERS/TechAnalysis_Tata_Motors_Ltd.html'
        },
        {
          id: 43,
          title: 'TATASTEEL - Tata Steel Ltd. - STEEL AND STEEL PRODUCTS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/STEEL_AND_STEEL_PRODUCTS/Tata_Steel_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/STEEL_AND_STEEL_PRODUCTS/FundamentalAnalysisOfTata_Steel_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/STEEL_AND_STEEL_PRODUCTS/TechAnalysis_Tata_Steel_Ltd.html'
        },
        {
          id: 44,
          title: 'TCS - Tata Consultancy Services Ltd. - COMPUTERS - SOFTWARE',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/Tata_Consultancy_Services_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/FundamentalAnalysisOfTata_Consultancy_Services_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/TechAnalysis_Tata_Consultancy_Services_Ltd.html'
        },
        {
          id: 45,
          title: 'TECHM - Tech Mahindra Ltd. - COMPUTERS - SOFTWARE',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/Tech_Mahindra_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/FundamentalAnalysisOfTech_Mahindra_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/TechAnalysis_Tech_Mahindra_Ltd.html'
        },
        {
          id: 46,
          title: 'TITAN - Titan Company Ltd. - GEMS, JEWELLERY AND WATCHES',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/GEMS_JEWELLERY_AND_WATCHES/Titan_Company_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/GEMS_JEWELLERY_AND_WATCHES/FundamentalAnalysisOfTitan_Company_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/GEMS_JEWELLERY_AND_WATCHES/TechAnalysis_Titan_Company_Ltd.html'
        },
        {
          id: 47,
          title: 'ULTRACEMCO - UltraTech Cement Ltd. - CEMENT AND CEMENT PRODUCTS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/UltraTech_Cement_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/FundamentalAnalysisOfUltraTech_Cement_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/CEMENT_AND_CEMENT_PRODUCTS/TechAnalysis_UltraTech_Cement_Ltd.html'
        },
        {
          id: 48,
          title: 'UPL - UPL Ltd. - PESTICIDES AND AGROCHEMICALS',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PESTICIDES_AND_AGROCHEMICALS/UPL_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PESTICIDES_AND_AGROCHEMICALS/FundamentalAnalysisOfUPL_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/PESTICIDES_AND_AGROCHEMICALS/TechAnalysis_UPL_Ltd.html'
        },
        {
          id: 49,
          title: 'VEDL - Vedanta Ltd - MINING',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MINING/Vedanta_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MINING/FundamentalAnalysisOfVedanta_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MINING/TechAnalysis_Vedanta_Ltd.html'
        },
        {
          id: 50,
          title: 'WIPRO - Wipro Ltd. - COMPUTERS - SOFTWARE',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/Wipro_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/FundamentalAnalysisOfWipro_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/COMPUTERS_SOFTWARE/TechAnalysis_Wipro_Ltd.html'
        },
        {
          id: 51,
          title: 'ZEEL - Zee Entertainment Enterprises Ltd. - MEDIA & ENTERTAINMENT',
          link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MEDIA_ENTERTAINMENT/Zee_Entertainment_Enterprises_Ltd.html',
          fin_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MEDIA_ENTERTAINMENT/TechAnalysis_Zee_Entertainment_Enterprises_Ltd.html',
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/MEDIA_ENTERTAINMENT/TechAnalysis_Zee_Entertainment_Enterprises_Ltd.html'
        },
        {
          id: 52,
          title: 'NIFTY - S&P CNX NIFTY - INDEX',
          link: null,
          fin_link: null,
          tech_link: 'https://www.topstockresearch.com/INDIAN_STOCKS/INDEX/TechAnalysis_S_P_CNX_NIFTY.html'
        }
      ];
}

getCompanies() {
    return this.companies;
}
}
