using MarsFramework.Config;
using MarsFramework.Pages;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Edge;
using RelevantCodes.ExtentReports;
using System;
using static MarsFramework.Global.GlobalDefinitions;

namespace MarsFramework.Global
{
    class Base
    {
        #region To access Path from resource file

        public static int Browser = int.Parse(MarsResource.Browser);
        public static string ExcelPath = "C:/Users/dell/source/repos/CompetitionTask/MarsFramework/ExcelData/TestData.xlsx";
        public static string ScreenshotPath = MarsResource.ScreenShotPath;
        public static string ReportPath = @"C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\MarsReports.html";
        public string BaseUrl = "http://localhost:5000/";
        #endregion

        #region reports
        public static ExtentTest test;
        public static ExtentReports extent;
        #endregion

        #region setup and tear down
        [SetUp]
        public void Inititalize()
        {
            //initialize browser
            InitializeBrowser(Browser);
            driver.Navigate().GoToUrl(BaseUrl);

            //switch (Browser)
            //{

            //    case 1:
            //        GlobalDefinitions.driver = new EdgeDriver();
            //        break;
            //    case 2:
            //        GlobalDefinitions.driver = new ChromeDriver();
            //        GlobalDefinitions.driver.Manage().Window.Maximize();
            //        break;
            //}
            

            #region Initialise Reports

            extent = new ExtentReports(ReportPath, false, DisplayOrder.NewestFirst);
            extent.LoadConfig(MarsResource.ReportXMLPath);

            #endregion

            if (MarsResource.IsLogin == "true")
            {
                SignIn loginobj = new SignIn();
                loginobj.LoginSteps();
            }
            else
            {
                SignUp obj = new SignUp();
                obj.register();
            }

        }


        [TearDown]
        public void TearDown()
        {
            // Screenshot
            String img = SaveScreenShotClass.SaveScreenshot(GlobalDefinitions.driver, "Report");//AddScreenCapture(@"E:\Dropbox\VisualStudio\Projects\Beehive\TestReports\ScreenShots\");
            test.Log(LogStatus.Info, "Image example: " + img);
            // end test. (Reports)
            extent.EndTest(test);
            // calling Flush writes everything to the log file (Reports)
            extent.Flush();
            // Close the driver :)            
            GlobalDefinitions.driver.Close();
            GlobalDefinitions.driver.Quit();
        }
        #endregion

    }
}