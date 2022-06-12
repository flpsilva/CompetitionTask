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
            [Test, Order(1)]
            public void LoginTest()
            {
                test = extent.StartTest("LoginTest");
                SignIn _loginAssertion = new SignIn();
                _loginAssertion.LoginAssertion();
            }

        }
    }
}