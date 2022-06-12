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
    public class Program
    {
        [TestFixture]
        [Category("Sprint1")]
        internal class User : Base
        {
            public static IWebDriver driver { get; set; }
            ShareSkill shareSkillObj = new ShareSkill();


            public void LoginFunction()
            {
                IWebDriver driver = new EdgeDriver();
                driver.Manage().Window.Maximize();
                driver.Navigate().GoToUrl("http://localhost:5000/");
                SignIn signin = new SignIn();
                signin.LoginSteps(driver);

            }


            [Test]

            public void ShareSkill()
            {
                Inititalize();
                shareSkillObj.EnterShareSkill();
            }

        }
    }
}