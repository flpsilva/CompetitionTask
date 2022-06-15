using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;
using System.Threading;
using MarsFramework.Global;
using OpenQA.Selenium.Support.UI;

namespace MarsFramework.Pages
{
    public class ShareSkill
    {

        public ShareSkill()
        {

            PageFactory.InitElements(Global.GlobalDefinitions.driver, this);
            //Initiate Excel file
            GlobalDefinitions.ExcelLib.PopulateInCollection(Base.ExcelPath, "ShareSkill");
        }

        //Click on ShareSkill Button
        [FindsBy(How = How.LinkText, Using = "Share Skill")]
        private IWebElement ShareSkillBtn { get; set; }

        //Enter the Title in textbox
        [FindsBy(How = How.Name, Using = "title")]
        private IWebElement Title { get; set; }

        //Enter the Description in textbox
        [FindsBy(How = How.Name, Using = "description")]
        private IWebElement Description { get; set; }

        //Click on Category Dropdown
        [FindsBy(How = How.Name, Using = "categoryId")]
        private IWebElement CategoryDropDown { get; set; }
        //Select Programming option
        [FindsBy(How = How.XPath, Using = "//div[3]/div[2]/div/div[1]/select/option[7]")]
        private IWebElement programming_TechOpt { get; set; }
        //Click on SubCategory Dropdown
        [FindsBy(How = How.Name, Using = "subcategoryId")]
        private IWebElement SubCategoryDropDown { get; set; }
        //select QA option
        [FindsBy(How = How.XPath, Using = "//div[3]/div[2]/div/div[2]/div[1]/select/option[5]")]
        private IWebElement qaOpt { get; set; }

        //Enter Tag names in textbox
        [FindsBy(How = How.XPath, Using = "//div[4]/div[2]/div/div/div/div/input")]
        private IWebElement Tags { get; set; }

        //Select the Service type1
        [FindsBy(How = How.XPath, Using = "//div[5]/div[2]/div[1]/div[1]/div/input")]
        private IWebElement ServiceTypeOption1 { get; set; }

        //Select the Service Type2
        [FindsBy(How = How.XPath, Using = "//div[5]/div[2]/div[1]/div[2]/div/input")]
        private IWebElement ServiceTypeOption2 { get; set; }

        //Select the Location Type On_Site
        [FindsBy(How = How.XPath, Using = "//div[6]/div[2]/div/div[1]/div/input")]
        private IWebElement LocationTypeOption1 { get; set; }


        //Select the Location Type Oline
        [FindsBy(How = How.XPath, Using = "//div[6]/div[2]/div/div[2]/div/input")]
        private IWebElement LocationTypeOption2 { get; set; }

        //Click on Start Date dropdown
        [FindsBy(How = How.Name, Using = "startDate")]
        private IWebElement StartDateDropDown { get; set; }

        //Click on End Date dropdown
        [FindsBy(How = How.Name, Using = "endDate")]
        private IWebElement EndDateDropDown { get; set; }

        //Storing the table of available days
        [FindsBy(How = How.XPath, Using = "//div[7]/div[2]/div/div[3]/div[1]/div/input")]
        private IWebElement Day1 { get; set; }

        [FindsBy(How = How.XPath, Using = "//div[7]/div[2]/div/div[4]/div[1]/div/input")]
        private IWebElement Day2 { get; set; }

        [FindsBy(How = How.XPath, Using = "//div[7]/div[2]/div/div[5]/div[1]/div/input")]
        private IWebElement Day3 { get; set; }

        //Storing the starttime
        [FindsBy(How = How.XPath, Using = "//div[3]/div[2]/input[1]")]
        private IWebElement StartTime { get; set; }

        //Click on StartTime dropdown
        [FindsBy(How = How.XPath, Using = "//div[3]/div[2]/input[1]")]
        private IWebElement StartTimeDropDown { get; set; }

        //Click on EndTime dropdown
        [FindsBy(How = How.XPath, Using = "//div[3]/div[3]/input[1]")]
        private IWebElement EndTimeDropDown { get; set; }

        //Click on Skill Trade option
        [FindsBy(How = How.XPath, Using = "//div[8]/div[2]/div/div[1]/div/input")]
        private IWebElement SkillTradeOption1 { get; set; }

        [FindsBy(How = How.XPath, Using = "//div[8]/div[2]/div/div[2]/div/input")]
        private IWebElement SkillTradeOption2 { get; set; }

        //Enter Skill Exchange
        [FindsBy(How = How.XPath, Using = "//div[@class='form-wrapper']//input[@placeholder='Add new tag']")]
        private IWebElement SkillExchange { get; set; }

        //Enter the amount for Credit
        [FindsBy(How = How.XPath, Using = "//input[@placeholder='Amount']")]
        private IWebElement CreditAmount { get; set; }

        //Click on Active/Hidden option
        [FindsBy(How = How.XPath, Using = "input[name='isActive'][value='true']")]
        private IWebElement ActiveOption { get; set; }

        //Click on Save button
        [FindsBy(How = How.XPath, Using = "//input[@value='Save']")]
        private IWebElement SaveBtn { get; set; }

        internal void Go_to_ShareSkillPage()
        {
            ShareSkillBtn.Click();
        }
        
        public void AddShareSkill()
        {
             //Create the Title
            Title.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Title"));
            Description.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Description"));

            //Select Category and Subcategory dropdown list
            new SelectElement(CategoryDropDown).SelectByText(GlobalDefinitions.ExcelLib.ReadData(2, "Category"));
            new SelectElement(SubCategoryDropDown).SelectByText(GlobalDefinitions.ExcelLib.ReadData(2, "SubCategory"));

            // Type in Tag and click enter
            Tags.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Tags"));
            Tags.SendKeys(Keys.Enter);

            //Select Service Type 
            ServiceType();

            //Select Location Type
            LocationType();

            //Select start date
            StartDateDropDown.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Startdate"));

            //Select end date
            EndDateDropDown.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Enddate"));

            //Select day
            Day1.Click();

            //Type in Start time and End time
            StartTimeDropDown.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Starttime"));
            EndTimeDropDown.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Endtime"));

            //Select Skill trade option
            SkillTradeOption1.Click();

            //Skill-Exchange tag
            SkillExchange.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Skill-Exchange"));
            SkillExchange.SendKeys(Keys.Enter);

            //Select Active
            ActiveOption.Click();

            //Click save button
            SaveBtn.Click();


        }
        internal void ServiceType()
        {
            //entering the service type
            if (GlobalDefinitions.ExcelLib.ReadData(2, "ServiceType") == "Hourly basis service")
            {
                ServiceTypeOption1.Click();
            }
            else
            {
                ServiceTypeOption2.Click();
            }
        }

        internal void LocationType()
        {
            //entering the location type
            if (GlobalDefinitions.ExcelLib.ReadData(2, "LocationType") == "On-site")
            {
                LocationTypeOption1.Click();
            }
            else
            {
                LocationTypeOption2.Click();
            }
        }

        internal void EditShareSkill()
        {
            //Edit the Title
            Title.SendKeys(GlobalDefinitions.ExcelLib.ReadData(3, "Title"));
            //Edit Description
            Description.SendKeys(GlobalDefinitions.ExcelLib.ReadData(3, "Description"));
            //Add Tag
            Tags.SendKeys(GlobalDefinitions.ExcelLib.ReadData(3, "Tags"));
            Tags.SendKeys(Keys.Enter);
            //Service Type Opt2
            ServiceTypeOption2.Click();
            //Lotation type2
            LocationTypeOption2.Click();
            //Update start date
            StartDateDropDown.SendKeys(GlobalDefinitions.ExcelLib.ReadData(3, "Startdate"));
            //Update end date
            EndDateDropDown.SendKeys(GlobalDefinitions.ExcelLib.ReadData(3, "Enddate"));
            //Edd Days 2,3 
            Day2.Click();
            Day3.Click();
            //Skill Trade Opt2
            SkillTradeOption2.Click();
            SkillExchange.SendKeys(GlobalDefinitions.ExcelLib.ReadData(2, "Credit"));
            SkillExchange.SendKeys(Keys.Enter);
            //Select Active
            ActiveOption.Click();
            //Click save button
            SaveBtn.Click();


        }

    }
}
