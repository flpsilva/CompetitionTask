using MarsFramework.Config;
using MarsFramework.Global;
using MarsFramework.Pages;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using RelevantCodes.ExtentReports;
using System;
using System.Threading;
using static MarsFramework.Global.GlobalDefinitions;

namespace MarsFramework
{

    public class CRED_ShareSkill
    {

        [TestFixture]
        [Category("Sprint1")]
        internal class User : Base
        {

            [Test, Order(1)]
            public void Add_ShadreSkill_Test()
            {
                test = extent.StartTest("Add_ShareSkill_Test");
                ShareSkill shareSkillObj = new ShareSkill();
                shareSkillObj.Go_to_ShareSkillPage();
                shareSkillObj.AddShareSkill();
                //Assertion
                ManageListings manageListingObj = new ManageListings();
                manageListingObj.Go_to_ManageListing_Page();
                Thread.Sleep(2000);
                manageListingObj.FindSkillListing();
            }

            [Test, Order(2)]
            public void EditShareSkill_Test()
            {
                test = extent.StartTest("EditShareSkill_Test");
                ManageListings manageListingObj = new ManageListings();
                manageListingObj.Go_to_ManageListing_Page();
                Thread.Sleep(2000);
                manageListingObj.EditBtn();
                Thread.Sleep(2000);
                ShareSkill shareSkillObj = new ShareSkill();
                shareSkillObj.EditShareSkill();
                WaitHelper.ElementIsVisible(driver, "XPath", "//div[1]/div[1]/table/tbody/tr[1]/td[3]", 5);
                //assertion
                manageListingObj.FindEditedSkillListing();
            }

            [Test, Order(3)]
            public void DeleteShareSkill_Test()
            {
                test = extent.StartTest("DeleteShareSkill_Test");
                ManageListings manageListingObj = new ManageListings();
                manageListingObj.Go_to_ManageListing_Page();
                Thread.Sleep(2000);
                manageListingObj.DeleteBtn();
                Thread.Sleep(1500);
                manageListingObj.ConfirmDeleteSkillListing();
            }

        }

    }

}