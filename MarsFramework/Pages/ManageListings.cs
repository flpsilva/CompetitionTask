using MarsFramework.Global;
using OpenQA.Selenium;
using NUnit.Framework;
using OpenQA.Selenium.Support;
using System.Threading;
using SeleniumExtras.PageObjects;

namespace MarsFramework.Pages
{
    internal class ManageListings : GlobalDefinitions
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
        [FindsBy(How = How.XPath, Using = "//div[1]/div[1]/table/tbody/tr[1]/td[3]")]
        private IWebElement TitleSkillListingElement { get; set; }

        //Delete the listing
        [FindsBy(How = How.XPath, Using = "//td[8]/div/button[3]/i")]
        private IWebElement delete { get; set; }
        
        [FindsBy(How = How.XPath, Using = "//html/body/div[2]/div/div[3]/button[2]")]
        private IWebElement confirmDeleteButton { get; set; }

        //Edit the listing
        [FindsBy(How = How.XPath, Using = "(//i[@class='outline write icon'])[1]")]
        private IWebElement update { get; set; }

        //Click on Yes or No
        [FindsBy(How = How.XPath, Using = "//div[@class='actions']")]
        private IWebElement clickActionsButton { get; set; }

        //PagePopup
        [FindsBy(How = How.XPath, Using = "//div[contains(text(),'QAEdited has been deleted')]")]
        private IWebElement pagePopup { get; set; }

        internal void Listings()
        {
            //Populate the Excel Sheet
            GlobalDefinitions.ExcelLib.PopulateInCollection(Base.ExcelPath, "ManageListings");

        }

        internal void Go_to_ManageListing_Page()
        {
           manageListingsLink.Click();
            Thread.Sleep(2);
        }
        internal void EditBtn()
        {
            WaitHelper.ElementIsVisible(driver, "XPath", "(//i[@class='outline write icon'])[1]", 5);
            update.Click(); 
        }
        internal void DeleteBtn()
        {
            WaitHelper.ElementIsVisible(driver, "Xpath", "//td[8]/div/button[3]/i", 5);
            delete.Click();
            GlobalDefinitions.Wait(2);
            confirmDeleteButton.Click();
            WaitHelper.ElementIsVisible(driver, "Xpath", "//div[contains(text(),'QAEdited has been deleted')]", 5);

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
         
            if (TitleSkillListingElement.Text == "QAEdited")
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
            if (pagePopup.Text == "QAEdited has been deleted")
            {
                Assert.Pass("Listing record deleted successfully, test passed.");
            }
            else
            {
                Assert.Fail("Listing not found, test failed.");
            }

        }
    }
}
