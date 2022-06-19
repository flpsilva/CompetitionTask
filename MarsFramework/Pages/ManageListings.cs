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
        [FindsBy(How = How.XPath, Using = "//td[8]/div/button[1]")]
        private IWebElement serviceDetail { get; set; }

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

        //Click Active/Deactivate
        [FindsBy(How = How.XPath, Using = "//td[7]/div/input")]
        private IWebElement clickActionsButton { get; set; }

        //PagePopup
        [FindsBy(How = How.XPath, Using = "//div[contains(text(),'QAEdited has been deleted')]")]
        private IWebElement pagePopup { get; set; }

        //DisablePopupMessage
        [FindsBy(How = How.XPath, Using = "//html/body/div[1]")]
        private IWebElement disablePopup { get; set; }

        //ActivatedPopupMessage
        [FindsBy(How = How.XPath, Using = "//html/body/div[1]")]
        private IWebElement activatedPopup { get; set; }

        //ServiceTitle
        [FindsBy(How = How.XPath, Using = "//h1/span")]
        private IWebElement serviceTitle { get; set; }

        //SeviceDescription
        [FindsBy(How = How.XPath, Using = "//div[2]/div/div/div[1]/div/div/div/div[2]")]
        private IWebElement serviceDescription { get; set; }

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

        internal void ViewServiceDetail()
        {
            serviceDetail.Click();
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

        internal void ConfirmServiceDetail()
        {
            WaitHelper.ElementIsVisible(driver, "Xpath", "//h1/span", 5);
            if (serviceTitle.Text == "QA Analyst")
            {
                
                Assert.Pass("Title successfully expected, test passed.");

            }
            else
            {
                Assert.Fail("The title does not do match the expected description, test failed.");
            }

            if (serviceDescription.Text == "")
            {
                Assert.Pass("title successfully expected, test passed.");
            }
            else
            {
                Assert.Fail("The description does not do match the expected description, test failed");
            }

        }

        internal void ConfirmDisableListing()
        {
            if (disablePopup.Text == "Service has been deactivated")
            {
                Assert.Pass("Service has been deactivated successfully, test passed.");
            }
            else
            {
                Assert.Fail("Service remained activated, test failed.");
            }

        }

        internal void ConfirmActivatedListing()
        {
            if (activatedPopup.Text == "Service has been activated")
            {
                Assert.Pass("Service has been activated successfully, test passed.");
            }
            else
            {
                Assert.Fail("Service remained deactivated, test failed.");
            }

        }
    }
}
