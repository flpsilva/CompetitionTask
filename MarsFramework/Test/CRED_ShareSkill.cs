using MarsFramework.Config;
using MarsFramework.Global;
using MarsFramework.Pages;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Firefox;
using RelevantCodes.ExtentReports;

namespace MarsFramework
{
    public class CRED_ShareSkill
    {
        [TestFixture]
        [Category("Sprint1")]
        internal class User : Base
        {
            SignIn loginobj = new SignIn();
            ShareSkill shareSkillObj = new ShareSkill();
            ManageListings manageListingObj = new ManageListings();

            [Test, Order(1)]
            public void Login_Test()
            {
                test = extent.StartTest("Login_Test");
                loginobj.LoginSteps();
                SignIn loginAssertion = new SignIn();
                loginAssertion.LoginAssertion();
            }

            [Test, Order(2)]

            public void Add_ShadreSkill_Test()
            {
                test = extent.StartTest("Add_ShareSkill_Test");
                shareSkillObj.Go_to_ShareSkillPage();
                shareSkillObj.AddShareSkill();
                //Assertion
                manageListingObj.Go_to_ManageListing_Page();
                manageListingObj.FindSkillListing();

            }

            [Test, Order(3)]
            public void EditShareSkill_Test()
            {
                test = extent.StartTest("EditShareSkill_Test");
                manageListingObj.EditBtn();
                shareSkillObj.EditShareSkill();
                //assertion
                manageListingObj.FindEditedSkillListing();
            }

            [Test, Order(4)]
            public void DeleteShareSkill_Test()
            {
                test = extent.StartTest("DeleteShareSkill_Test");
                manageListingObj.Go_to_ManageListing_Page();
                manageListingObj.DeleteBtn();
                manageListingObj.ConfirmDeleteSkillListing();

            }
        }
    }
}