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
        public IWebDriver driver;
        [TestFixture]
        [Category("Sprint1")]
        internal class User : Base
        { 
            ShareSkill shareSkillObj = new ShareSkill();
            [SetUp]
            public void LoginFunction()
            {
                EdgeDriver driver = new EdgeDriver();
                driver.Manage().Window.Maximize();
                SignIn signin = new SignIn();
                signin.LoginSteps();

            }


            [Test, Order(1)]
            public void Test(IWebDriver driver)
            {
                driver = new EdgeDriver();
                driver.Navigate().GoToUrl("http://localhost:5000/");
               
                shareSkillObj.EnterShareSkill(driver);

            }
            //[Test, Order(2)]

            public void Update()
            {

            }

        }
    }
}