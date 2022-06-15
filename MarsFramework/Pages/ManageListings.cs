using MarsFramework.Global;
using OpenQA.Selenium;
using NUnit.Framework;
using OpenQA.Selenium.Support.PageObjects;
using System.Threading;

namespace MarsFramework.Pages
{
    internal class ManageListings
    {
        public ManageListings()
        {
            PageFactory.InitElements(Global.GlobalDefinitions.driver, this);
        }

        //Click on Manage Listings Page
        [FindsBy(How = How.LinkText, Using = "Manage Listings")]
        private IWebElement manageListingsLink { get; set; }

        //View the listing
        [FindsBy(How = How.XPath, Using = "(//i[@class='eye icon'])[1]")]
        private IWebElement view { get; set; }

        //Find Skill Listing
        [FindsBy(How = How.XPath, Using = "//table/tbody/tr[1]/td[3]")]
        private IWebElement TitleSkillListingElement { get; set; }

        //Delete the listing
        [FindsBy(How = How.XPath, Using = "//table[1]/tbody[1]")]
        private IWebElement delete { get; set; }
        
        [FindsBy(How = How.XPath, Using = "//button[@class='ui icon positive right labeled button']")]
        private IWebElement confirmDeleteButton { get; set; }

        //Edit the listing
        [FindsBy(How = How.XPath, Using = "(//i[@class='outline write icon'])[1]")]
        private IWebElement update { get; set; }

        //Click on Yes or No
        [FindsBy(How = How.XPath, Using = "//div[@class='actions']")]
        private IWebElement clickActionsButton { get; set; }

        //Popup
        [FindsBy(How = How.XPath, Using = "//div[contains(text(),'QA AnalystUpdate has been deleted')]")]
        private IWebElement popup { get; set; }

        internal void Listings()
        {
            //Populate the Excel Sheet
            GlobalDefinitions.ExcelLib.PopulateInCollection(Base.ExcelPath, "ManageListings");

        }

        internal void Go_to_ManageListing_Page()
        {
           manageListingsLink.Click();
            Thread.Sleep(3);
        }
        internal void EditBtn()
        {
            update.Click(); 
        }
        internal void DeleteBtn()
        {
            delete.Click();
            confirmDeleteButton.Click();
            Thread.Sleep(2000);
        }

        internal void ClickActionBtn()
        {
            clickActionsButton.Click();
        }
        internal void FindSkillListing()
        {
            
            if (TitleSkillListingElement.Text == "QA Analyst")
            {
                Assert.Pass("Listing created successfully, test passed.");
            }
            else
            {
                Assert.Fail("Listing not found, test failed.");
            }
        }

        internal void FindEditedSkillListing()
        {
         
            if (TitleSkillListingElement.Text == "QA AnalystUpdate")
            {
                Assert.Pass("Listing record edited successfully, test passed.");
            }
            else
            {
                Assert.Fail("Listing not found, test failed.");
            }
        }

        internal void ConfirmDeleteSkillListing()
        {
            if (popup.Text == "QA AnalystUpdate has been deleted")
            {
                Assert.Pass("Listing record edited successfully, test passed.");
            }
            else
            {
                Assert.Fail("Listing not found, test failed.");
            }

        }
    }
}
