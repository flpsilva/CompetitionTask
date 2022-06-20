
                                        


                    <!DOCTYPE html>
                    <html>
                        <head>
                            <!--
                                ExtentReports Library 2.40.0 | http://relevantcodes.com/extentreports-for-selenium/ | https://github.com/anshooarora/
                                Copyright (c) 2015, Anshoo Arora (Relevant Codes) | Copyrights licensed under the New BSD License | http://opensource.org/licenses/BSD-3-Clause
                                Documentation: http://extentreports.relevantcodes.com 
                            -->
                            <meta charset='UTF-8' /> 
                            <meta name='description' content='ExtentReports (by Anshoo Arora) is a reporting library for automation testing for .NET and Java. It creates detailed and beautiful HTML reports for modern browsers. ExtentReports shows test and step summary along with dashboards, system and environment details for quick analysis of your tests.' />
                            <meta name='robots' content='noodp, noydir' />
                            <meta name='viewport' content='width=device-width, initial-scale=1' />
                            <meta name='extentx' id='extentx' />

                            <title>
ExtentReports 2.0                            </title>

                            <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600' rel='stylesheet' type='text/css'>
                            <link href='https://cdn.rawgit.com/anshooarora/extentreports/97fc3fe7f55cba86a4f5b6ff9a2bb80de3e4867c/cdn/extent.css' type='text/css' rel='stylesheet' />

                            <style>

                
                                        </style>
                        </head>
                        <body class='extent standard hide-overflow'>
                            <!-- nav -->
                            <nav>
                                <div class='logo-container'>
                                    <a class='logo-content' href='http://extentreports.relevantcodes.com'>
                                        <span>ExtentReports</span>
                                    </a>
                                    <a href='#' data-activates='slide-out' class='button-collapse hide-on-large-only'><i class='mdi-navigation-apps'></i></a>
                                </div>

                                <!-- sidenav -->
                                <ul id='slide-out' class='side-nav fixed'>
                                    <li class='analysis waves-effect active'><a href='#!' class='test-view' onclick='_updateCurrentStage(0)'><i class='mdi-action-dashboard'></i>Test Details</a></li>
                                                                        <li class='analysis waves-effect'><a href='#!' class='dashboard-view'><i class='mdi-action-track-changes'></i></i>Analysis</a></li>
                                </ul>
                                <!-- /sidenav -->

                                <span class='report-name'>Automation Report</span> <span class='report-headline'></span>

                                <!-- navright -->
                                <ul class='right hide-on-med-and-down nav-right'>
                                    <li class='theme-selector' alt='Click to toggle dark theme.' title='Click to toggle dark theme.'>
                                        <i class='mdi-hardware-desktop-windows'></i>
                                    </li>
                                    <li>
                                        <span class='suite-started-time'>2022-06-20 11:55:13</span>
                                    </li>
                                    <li>
                                        <span>v2.41.0</span>
                                    </li>
                                </ul>
                                <!-- /navright -->
                            </nav>
                            <!-- /nav -->

                            <div class='container'>
                                <!-- dashboard -->
                                <div id='dashboard-view' class='row'>
                                    <div class='time-totals'>
                                        <div class='col l2 m4 s6'>
                                            <div class='card suite-total-tests'> 
                                                <span class='panel-name'>Total Tests</span> 
                                                <span class='total-tests'> <span class='panel-lead'></span> </span> 
                                            </div> 
                                        </div>
                                        <div class='col l2 m4 s6'>
                                            <div class='card suite-total-steps'> 
                                                <span class='panel-name'>TotalSteps</span> 
                                                <span class='total-steps'> <span class='panel-lead'></span> </span> 
                                            </div> 
                                        </div>
                                        <div class='col l4 m4 s12'>
                                            <div class='card suite-time'> 
                                                <span class='panel-name'>Total Time Taken</span> 
                                                <span class='suite-total-time-taken panel-lead'>0h 0m 7s+370ms</span> 
                                            </div> 
                                        </div>
                                        <div class='col l2 m6 s6 suite-start-time'>
                                            <div class='card green-accent'> 
                                                <span class='panel-name'>Start</span> 
                                                <span class='panel-lead suite-started-time'>2022-06-20 11:55:13</span> 
                                            </div> 
                                        </div>
                                        <div class='col l2 m6 s6 suite-end-time'>
                                            <div class='card pink-accent'> 
                                                <span class='panel-name'>End</span> 
                                                <span class='panel-lead suite-ended-time'>2022-06-20 11:55:20</span> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div class='charts'>
                                        <div class='col s12 m6 l4 fh'> 
                                            <div class='card-panel'> 
                                                <div>
                                                    <span class='panel-name'>Tests View</span>
                                                </div> 
                                                <div class='panel-setting modal-trigger test-count-setting right'>
                                                    <a href='#test-count-setting'><i class='mdi-navigation-more-vert text-md'></i></a>
                                                </div> 
                                                <div class='chart-box'>
                                                    <canvas class='text-centered' id='test-analysis'></canvas>
                                                </div> 
                                                <div>
                                                    <span class='weight-light'><span class='t-pass-count weight-normal'></span> test(s) passed</span>
                                                </div> 
                                                <div>
                                                    <span class='weight-light'><span class='t-fail-count weight-normal'></span> test(s) failed, <span class='t-others-count weight-normal'></span> others</span>
                                                </div> 
                                            </div> 
                                        </div> 
                                        <div class='col s12 m6 l4 fh'> 
                                            <div class='card-panel'> 
                                                <div>
                                                    <span class='panel-name'>StepsView</span>
                                                </div> 
                                                <div class='panel-setting modal-trigger step-status-filter right'>
                                                    <a href='#step-status-filter'><i class='mdi-navigation-more-vert text-md'></i></a>
                                                </div> 
                                                <div class='chart-box'>
                                                    <canvas class='text-centered' id='step-analysis'></canvas>
                                                </div> 
                                                <div>
                                                    <span class='weight-light'><span class='s-pass-count weight-normal'></span> step(s) passed</span>
                                                </div> 
                                                <div>
                                                    <span class='weight-light'><span class='s-fail-count weight-normal'></span> step(s) failed, <span class='s-others-count weight-normal'></span> others</span>
                                                </div> 
                                            </div> 
                                        </div>
                                        <div class='col s12 m12 l4 fh'> 
                                            <div class='card-panel'> 
                                                <span class='panel-name'>Pass Percentage</span> 
                                                <span class='pass-percentage panel-lead'></span> 
                                                <div class='progress light-blue lighten-3'> 
                                                    <div class='determinate light-blue'></div> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div class='system-view'>
                                        <div class='col l4 m12 s12'>
                                            <div class='card-panel'>
                                                <span class='label info right outline'>Environment</span>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Param</th>
                                                            <th>Value</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                            <tr>
                                                                <td>User Name</td>
                                                                <td>dell</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Machine Name</td>
                                                                <td>FLP-DELL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Domain</td>
                                                                <td>FLP-DELL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>OS</td>
                                                                <td>Win32NT 10.0.22000.0</td>
                                                            </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /dashboard -->

                                <!-- tests -->
                                <div id='test-view' class='row _addedTable'>
                                    <div class='col _addedCell1'>
                                        <div class='contents'>
                                            <div class='card-panel heading'>
                                                <h5>Tests</h5>
                                            </div>
                                            <div class='card-panel filters'>
                                                <div>
                                                    <a data-activates='tests-toggle' data-constrainwidth='true' data-beloworigin='true' data-hover='true' href='#' class='dropdown-button button tests-toggle'><i class='mdi-action-subject icon'></i></a>
                                                    <ul id='tests-toggle' class='dropdown-content'>
                                                        <li class='pass'><a href='#!'>Pass</a></li>
                                                        <li class='fail'><a href='#!'>Fail</a></li>
                                                                                                                                                                        <li class='skip'><a href='#!'>Skip</a></li>
                                                        <li class='divider'></li>
                                                        <li class='clear'><a href='#!'>Clear Filters</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <a id='clear-filters' alt='Clear Filters' title='Clear Filters'><i class='mdi-navigation-close icon'></i></a>
                                                </div>
                                                <div>&nbsp;&middot;&nbsp;</div>
                                                <div>
                                                    <a id='enableDashboard' alt='Enable Dashboard' title='Enable Dashboard'><i class='mdi-action-track-changes icon'></i></a>
                                                </div> 
                                                <div>
                                                    <a id='refreshCharts' alt='Refresh Charts on Filters' title='Refresh Charts on Filters' class='enabled'><i class='mdi-navigation-refresh icon'></i></i></a>
                                                </div>
                                                <div>&nbsp;&middot;</div>
                                                <div class='search' alt='Search Tests' title='Search Tests'>
                                                    <div class='input-field left'>
                                                        <input id='searchTests' type='text' class='validate' placeholder='Search Tests...'>
                                                    </div>
                                                    <i class='mdi-action-search icon'></i>
                                                </div>
                                            </div>
                                            <div class='card-panel no-padding-h no-padding-v'>
                                                <div class='wrapper'>
                                                    <ul id='test-collection' class='test-collection'>
                                                            <li class='collection-item test displayed active pass ' extentid='e04e6bad-655a-4b7c-81a4-093fb7ee8033'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:04:48</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:04:59</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:04:59</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-04-2022_459.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='481e41b0-af6c-41ba-80db-5cba1f9b7de7'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:07:33</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:07:45</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 12s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:07:45</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-07-2022_745.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='c17773f1-04d5-42b5-bc61-bb3cca7cfa5e'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:09:35</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:09:45</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:09:45</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-09-2022_945.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='1da91b00-3082-4e30-850e-86ffb2f82c18'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:10:46</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:10:56</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:10:56</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-10-2022_1056.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='8b518c05-f3e0-4ce9-8229-a42f3f7270fd'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:43:35</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:43:47</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 12s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:43:47</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-43-2022_4347.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='ff38eba9-0774-4cb9-9868-5fefb83e6a25'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                                                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:43:52</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:44:07</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 15s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:44:07</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-44-2022_4407.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='dea13ef6-8568-4686-9628-d51664ef367e'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:44:12</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:44:18</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 6s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:44:18</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-44-2022_4418.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='350baaca-2605-42b3-a4ad-a2397a59019b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:49:47</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:49:58</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:49:58</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-49-2022_4958.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='151088f3-e87e-4210-85ce-e3f151294c92'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:50:53</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:51:04</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:51:04</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-51-2022_5104.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='9a54e0b7-a41e-4832-bafd-1b8b9cc6bd93'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:52:49</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:52:59</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:52:59</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-52-2022_5259.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='6da1b39f-e229-4816-8539-c180f40c66e1'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                                                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:53:04</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:53:18</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:53:18</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-53-2022_5317.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='63d9a64d-a83a-46e4-ac8b-7e5383b90dcd'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 13:53:23</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 13:53:28</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>13:53:28</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-53-2022_5328.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='8b99f4c8-06eb-4b2d-8335-15b52acd7e1d'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 18:54:23</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 18:54:32</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:54:32</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-54-2022_5432.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='1c4820cf-8177-456b-906b-16b9c203cbf3'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                                                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 18:54:39</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 18:54:53</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:54:53</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-54-2022_5453.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='21e04bf8-285c-450c-b5ca-62a584353a8b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 18:54:59</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 18:55:05</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 6s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:55:05</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-55-2022_5505.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='2847157b-ac69-48fc-9d29-9ce882bac09f'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:17:11</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:17:26</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 15s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:17:26</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-17-2022_1726.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='b97308c8-db51-488f-8324-b0a7ffec5c98'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:17:33</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:17:49</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 16s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:17:49</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-17-2022_1749.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='36432fd3-debf-40fe-8702-8dbfd2debad4'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:17:55</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:17:59</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:17:59</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-17-2022_1759.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e0c4f405-16bb-444f-b386-009636163c5b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:21:54</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:21:58</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:21:58</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-21-2022_2158.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='94a43d6f-625e-47dc-9887-2872e09c382a'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:23:14</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:23:28</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:23:28</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-23-2022_2328.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='0c3bb50f-b1db-4d85-940c-d77b2f5b2f01'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:23:34</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:23:49</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 15s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:23:49</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-23-2022_2348.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='7317446a-854a-462f-85b5-57a4399c1936'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:23:54</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:23:58</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:23:58</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-23-2022_2358.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='481843c0-277d-4382-b813-4a7368cc3f20'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:27:59</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:28:12</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 13s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:28:12</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-28-2022_2812.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='cebc5066-1f55-40e7-a5aa-c015911fe170'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:28:18</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:28:33</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 15s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:28:33</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-28-2022_2833.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='c2fa41df-bb18-470b-b85c-45659a8320a1'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:28:39</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:28:43</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:28:43</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-28-2022_2843.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='0b5986e1-2ba0-4b87-8865-089e3317d9f6'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:29:09</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:29:18</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:29:18</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-29-2022_2918.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='1ffe5e2a-9243-4917-9ab4-6883ffcffd40'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:29:24</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:29:38</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:29:38</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-29-2022_2938.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f561815a-72cc-4ca0-89bc-fb694b18a9ef'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:29:44</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:29:48</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:29:48</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-29-2022_2948.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='196cb7bb-efbf-4899-9574-f0dce8e02855'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:41:27</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:41:41</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:41:41</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-41-2022_4141.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='693e7f5e-e6c6-455a-8d2e-289a37852d60'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:41:47</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:42:00</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 13s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:42:00</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-42-2022_4200.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='3c7942aa-471f-4fc9-b6ea-a269471c5173'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:42:06</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:42:09</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:42:09</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-42-2022_4209.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='c38048da-e924-4f08-8043-ca84bd8d6cb9'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:45:00</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:45:11</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:45:11</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-45-2022_4511.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='1f2c6739-e69d-4636-b8aa-00c4a4175b86'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:45:17</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:45:30</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 13s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:45:30</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-45-2022_4530.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d6779513-1c9c-4e69-ad37-2d01f0b34711'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:45:36</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:45:40</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:45:40</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-45-2022_4539.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f3addde3-5b45-4fc1-83a2-edf801046018'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:52:56</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:53:06</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:53:06</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-53-2022_5306.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='266e70a7-988b-46fe-92dc-d84d3b3340e8'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:53:12</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:53:26</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:53:26</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-53-2022_5325.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='41df1a8f-041c-456e-9a42-7c89ea164245'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:53:31</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:53:35</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:53:35</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-53-2022_5335.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='3a33fdf0-7d01-4bb8-a9c4-9d12de56ee61'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:54:59</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:55:11</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 12s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:55:11</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-55-2022_5511.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='c39fce63-866f-4a97-bb5c-c345469128a6'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:55:33</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:55:38</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:55:38</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-55-2022_5538.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='1b290da7-ba92-4b9a-b7a0-434008479be9'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 19:58:21</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 19:58:30</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:58:30</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-58-2022_5830.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='cc6468d8-8ed5-4143-a53d-b464e9ecf15e'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:01:27</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:01:38</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:01:38</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-01-2022_138.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='6915943a-b263-4d33-ae5b-bc5e91af3b8e'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:01:44</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:01:56</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 12s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:01:56</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-01-2022_156.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f3586576-abe3-422e-8176-6cff80eaf741'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:02:01</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:02:05</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:02:05</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-02-2022_205.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='447900e6-69a6-4c73-a04b-6581073ea9b4'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:06:24</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:06:30</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 6s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:06:30</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-06-2022_630.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='8003e28e-709b-434f-a918-deb667020bfb'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:13:31</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:13:40</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:13:40</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-13-2022_1340.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f34a3f98-2bf4-4593-b48f-d8a8aa0a846d'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:13:46</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:13:59</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 13s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:13:59</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-13-2022_1359.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='b52d1656-2ff4-4b68-a811-0db8b94c704b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:14:04</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:14:08</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:14:08</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-14-2022_1408.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='0c512248-fb8c-4742-967f-db035e289803'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:20:41</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:20:52</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:20:52</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-20-2022_2052.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='48394604-02c7-440f-9895-9f7609738dd1'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:20:57</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:21:11</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:21:11</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-21-2022_2111.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='28dbe099-1036-4d00-83ec-6cd7fd781dab'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:21:16</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:21:20</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:21:20</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-21-2022_2120.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e1e00019-357b-4e9c-86c0-c375c7e3a99f'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:23:53</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:24:05</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 12s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:24:05</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-24-2022_2405.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e845268e-2a86-4562-a0de-413471af20f3'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:24:35</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:24:46</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:24:46</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-24-2022_2446.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='8f3b83f2-8755-42db-bc3f-f5992366b5af'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:24:52</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:25:05</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 13s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:25:05</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-25-2022_2505.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='fe131531-571a-44eb-b915-31145b800269'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:25:10</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:25:14</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:25:14</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-25-2022_2514.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d50d6277-5f57-407f-bb81-dd82c5368f91'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:26:10</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:26:20</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:26:20</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-26-2022_2620.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='c3570e70-deb6-406b-bb94-917c11f13b52'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:26:26</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:26:40</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:26:40</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-26-2022_2639.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='64a2d282-8b8b-410c-907b-5000e1600b49'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:26:45</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:26:48</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:26:48</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-26-2022_2648.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='ea87d2bb-9217-4bba-acb5-9afc24e02495'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:27:02</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:27:13</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:27:13</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-27-2022_2713.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='b5f83651-0150-44c4-beb3-cf812aaf6eae'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:27:17</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:27:32</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 15s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:27:32</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-27-2022_2732.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='8b7adcc7-313e-4e90-adfb-ac3bac659fde'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:27:37</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:27:41</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:27:41</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-27-2022_2741.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='0ea8492c-8e33-4e12-a372-1754a5128320'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:30:04</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:30:13</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:30:13</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-30-2022_3013.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='1e4a42bd-d2cc-4cdd-bfeb-25dd8b5a4195'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:30:19</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:30:31</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 12s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:30:31</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-30-2022_3031.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='810aa706-3c81-4197-a24f-5d669df307f3'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:30:36</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:30:40</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:30:40</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-30-2022_3040.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='46f696fb-a4cf-4016-a960-e10eb8af8423'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:36:21</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:36:33</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 12s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:36:33</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-36-2022_3633.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='36d3c0dc-8cc1-44a0-932f-31cc8301d4b9'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:36:38</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:36:52</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:36:52</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-36-2022_3652.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='7626f302-c92f-4782-99e0-0a89efe5779b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:36:57</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:37:02</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:37:02</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-37-2022_3702.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f1ebd889-0478-4c05-96b3-988d1a274c93'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:42:20</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:42:31</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:42:31</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-42-2022_4231.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='4b961da3-b123-451e-9c5b-ae39fd483a15'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:42:37</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:42:51</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:42:51</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-42-2022_4251.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='86d7ca65-3d8c-4d34-b775-f1c5a9ce7c4a'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:42:57</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:43:00</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:43:00</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-43-2022_4300.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='a1893191-829f-4f28-b9a0-72f4c52a9569'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:43:46</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:43:56</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:43:56</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-43-2022_4356.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='05976e56-1843-4982-84f8-2e33bd072b9f'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:44:01</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:44:16</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 15s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:44:16</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-44-2022_4416.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f838cdfe-25d6-4de6-8e99-b471840b442d'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:44:21</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:44:28</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 7s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:44:28</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-44-2022_4428.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='7accb513-729b-4d42-af18-7de694f866ca'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:45:22</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:45:26</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:45:26</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-45-2022_4526.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f8c70f47-0970-4aa8-9b90-2c4bd3a06bc3'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:47:43</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:47:52</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:47:52</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-47-2022_4752.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='c7b49e3d-ace6-4697-a555-deed37508ee1'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:47:57</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:48:12</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 15s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:48:12</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-48-2022_4812.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='2e273b57-3da0-4e21-ab9a-ba0dc73c7f47'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:48:17</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:48:24</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 7s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:48:24</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-48-2022_4824.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='53b88dc0-9bbc-4a6c-a6ce-5254ffadb03c'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:49:29</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:49:40</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:49:40</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-49-2022_4940.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='3989e06d-cd09-496a-b157-5cf2ad2d4df6'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:49:46</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:49:58</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 12s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:49:58</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-49-2022_4958.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='a3f4dc71-2007-4082-8f30-eede5474abe2'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:50:04</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:50:10</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 6s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:50:10</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-50-2022_5010.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e6e226c2-7428-47a1-88f9-8d71bb5085be'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:51:12</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:51:25</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 13s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:51:25</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-51-2022_5125.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='bee92af7-f700-4a6d-bbdd-8887669b41f1'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:51:30</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:51:44</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 14s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:51:44</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-51-2022_5144.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='405581de-c323-4df8-a496-c4a2688385fd'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:51:49</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:51:56</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 7s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:51:56</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-51-2022_5156.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d3e88c67-c4d4-4a24-81ae-d4a2a13776fa'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:53:59</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:54:09</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:54:09</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-54-2022_5409.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='a34d1b91-19f3-4d5d-8fed-c9521c51110f'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:54:15</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:54:28</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 13s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:54:28</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-54-2022_5428.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='47d6ab79-e5c4-4d47-af00-0bda3cbf8a1b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:54:34</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:54:41</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 7s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:54:41</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-54-2022_5440.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='31ccc6e7-0fc2-4317-bffb-42062176942e'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:56:07</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:56:16</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:56:16</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-56-2022_5616.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='ddaf55a0-64f0-41ef-8f1d-177f721814c8'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:56:23</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:56:36</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 13s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:56:36</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-56-2022_5636.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='43bd95ab-78c2-4f2b-87c2-aa0cb1a6d639'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 20:56:42</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 20:56:45</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:56:45</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-56-2022_5645.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e536f4cd-e7f0-4c73-981f-ed574ef62d08'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:09:17</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:09:27</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:09:27</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-09-2022_927.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='630bf715-9750-4566-9a43-ef5b7cc454e3'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:09:34</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:09:43</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:09:43</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-09-2022_943.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='23c1f24f-6507-48dd-8218-cba3cd7a7acd'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:09:50</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:09:55</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:09:55</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-09-2022_955.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='2eee2965-ee51-4aaf-af66-222565f62000'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:15:13</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:15:22</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:15:22</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-15-2022_1522.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f6e1789e-d927-4ea4-8d28-2750f0c037bc'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:15:29</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:15:39</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:15:39</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-15-2022_1539.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f1927d25-1e7c-47eb-b68e-53dbb2b400cb'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:15:45</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:15:50</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:15:50</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-15-2022_1550.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d05f9cdf-01b6-4d4b-9407-ef66f52e6133'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:16:48</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:16:56</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 8s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:16:56</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-16-2022_1656.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='398ecd13-b537-4b25-a2dc-181eb41ad155'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:17:27</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:17:37</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:17:37</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-17-2022_1736.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='b26ccbb2-0b77-498f-b707-7326e379da0d'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:17:43</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:17:54</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:17:54</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-17-2022_1753.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='4a6d6533-71ef-4fcf-9b53-a79817f6e9d7'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:20:00</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:20:09</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:20:09</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-20-2022_2009.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d778c67b-0330-4e7d-9de9-df0bb21e2043'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:20:17</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:20:28</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:20:28</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-20-2022_2028.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='365f65fc-4c54-4bda-8bca-a38454b19d55'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:20:36</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:20:40</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:20:40</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-20-2022_2040.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d31ee6b3-1012-4377-bcd6-a34810b1445d'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:26:02</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:26:12</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:26:12</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-26-2022_2611.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d527b8f8-e611-4cce-9862-c694c09988dd'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:26:20</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:26:31</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:26:31</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-26-2022_2631.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='72139a7e-5c4f-4765-a280-defee6c22ebd'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:26:39</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:26:44</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:26:44</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-26-2022_2644.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='2b027b7d-b933-4c77-b3bb-c29b1d435ee0'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:34:17</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:34:27</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:34:27</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-34-2022_3427.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='5223a538-03d7-48d5-a7ff-7294497e0bfb'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:34:35</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:34:46</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:34:46</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-34-2022_3446.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='905d5cb3-54e4-4b3c-b374-7b935854c838'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:34:54</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:34:58</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:34:58</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\ScreenshotsReport_18-34-2022_3458.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='9d2e0b26-e2d3-43ff-ba7e-91c43dae9caa'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:36:05</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:36:14</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:36:14</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReportsReport_18-36-2022_3614.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='10e2f7c6-b664-42a6-8b8c-37ad87df1e5a'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:36:23</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:36:34</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:36:34</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReportsReport_18-36-2022_3633.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='9e0b2392-7e7c-484e-95f5-960fe0b00cf3'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:36:42</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:36:46</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:36:46</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReportsReport_18-36-2022_3646.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='ddec2180-7273-4109-9310-d2d76e7bda5c'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:39:10</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:39:20</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:39:20</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_18-39-2022_3920.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='57ad6f47-e1dc-435f-b080-3ec87d5535fc'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-18 21:41:04</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-18 21:41:13</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:41:13</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_18-41-2022_4113.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='8d679bd8-215e-49c3-bd6d-adcaf59d8091'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>Add_ShareSkill_Test                                               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 17:02:44</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 17:02:54</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>17:02:54</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-02-2022_253.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='9a8ca910-82dd-4000-8580-0ee09d7eb363'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 17:03:02</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 17:03:13</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>17:03:13</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-03-2022_312.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e7cd515b-5f68-4ca8-9775-d479b9766e83'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 17:03:20</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 17:03:25</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>17:03:25</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-03-2022_325.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='3d7eb15d-9a8a-44c9-9993-4fbbac007fd5'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:22:40</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:22:41</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 1s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:22:41</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-22-2022_2241.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f5753b83-c095-4e78-9eed-335ae8da6292'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:24:58</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:24:59</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 1s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:24:59</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-24-2022_2459.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f6d1e125-78d6-4f5e-aebf-86dd6dea9b89'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:25:45</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:25:46</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 1s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:25:46</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-25-2022_2546.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='ee3c7ba2-ac1e-4f01-b920-418a8426a4ac'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:26:58</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:26:59</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 1s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:26:59</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-26-2022_2659.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='616cdc54-ef09-4f3f-bbd0-7d7e65263ca5'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:28:15</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:28:18</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:28:18</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-28-2022_2818.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='9807f075-d47f-46fc-b5f0-eb4a0d484473'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:35:31</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:35:32</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 1s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:35:32</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-35-2022_3532.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='325fba10-e9fe-4297-9b22-f58e65ee3acb'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:37:21</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:37:22</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 1s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:37:22</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-37-2022_3721.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='67d79316-c019-4f28-8d7e-326b2a0ee0dd'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:39:03</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:39:07</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:39:07</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-39-2022_3907.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='49424034-854e-4562-8a74-08dd6b1ac7fb'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:39:40</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:39:43</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:39:43</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-39-2022_3943.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='66bcacb2-641f-4d36-8dce-b3b04d04ab28'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>AddShareSkill_Test                                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:57:01</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:57:11</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:57:11</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-57-2022_5711.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e4876eaa-b4fd-410e-bdee-a2c8e4104239'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:57:19</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:57:22</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:57:22</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-57-2022_5722.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='ceb4e0a8-f358-4dc2-8278-abbc336e5052'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:57:30</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:57:41</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:57:41</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-57-2022_5741.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='be2d7601-2be1-4cc4-90d2-7a6838c78429'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 18:57:49</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 18:57:53</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>18:57:53</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-57-2022_5753.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='44d21696-fc3c-44f2-a4d4-c42bd658c6a1'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>AddShareSkill_Test                               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 19:06:31</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 19:06:40</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:06:40</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-06-2022_640.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='03bccac7-323e-4faa-b2f6-c1bff18fbb5f'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeactiveListing                              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 19:58:45</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 19:58:49</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:58:49</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-58-2022_5849.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='a97e4d23-76ce-425e-80a7-8756c2f0ef64'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ActiveListing                             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 19:59:15</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 19:59:20</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:59:20</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-59-2022_5919.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='185238f0-10c4-463f-a10b-4060e93c502b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>AddShareSkill_Test                            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 19:59:44</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 19:59:53</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>19:59:53</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-59-2022_5953.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e63a28d0-36f8-42b2-a039-45f9d9d1f834'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 20:00:01</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 20:00:04</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:00:04</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-00-2022_004.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='1024510b-38d0-4c51-be83-8eb4779efe7e'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeactiveListing                          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 20:00:12</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 20:00:16</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:00:16</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-00-2022_016.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='1d0de8d7-0695-4b17-9277-ca459bf96b45'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ActiveListing                         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 20:00:24</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 20:00:28</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:00:28</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-00-2022_028.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='b6b92c51-e78e-46c7-9884-6a91f38cbe09'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 20:00:36</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 20:00:46</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 10s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:00:46</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-00-2022_046.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='feaf2b6f-c542-484d-818a-4fd3e684ba1b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 20:00:54</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 20:00:59</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>20:00:59</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-00-2022_059.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='23980ede-d16b-4cf0-b15a-d9238afe1d93'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>AddShareSkill_Test                      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 21:54:01</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 21:54:10</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:54:10</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-54-2022_5410.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='b1c0c85a-3f8a-46a1-9dc1-20717b3ea15b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test                     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 21:54:18</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 21:54:21</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:54:21</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-54-2022_5421.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='b5272a50-cb87-4363-91f3-303afe7dc7a8'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeactiveListing                    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 21:54:29</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 21:54:33</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:54:33</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-54-2022_5433.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='9aeaebe4-e552-4eaa-8785-403f3daa3759'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ActiveListing                   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 21:54:41</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 21:54:45</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:54:45</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-54-2022_5445.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='10b365c9-61f8-4f4a-8265-94cbdba156d5'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test                  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 21:54:53</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 21:55:04</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:55:04</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-55-2022_5503.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='cf7ddc89-5b63-4896-ace6-9cf582eb0472'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test                 </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-19 21:55:11</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-19 21:55:16</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>21:55:16</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_19-55-2022_5516.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e9442351-5060-4b6c-9eaf-ec6e2ce2ac39'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>AddShareSkill_Test                </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 00:13:45</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 00:13:54</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>00:13:54</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-13-2022_1354.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='f37e2179-3a27-4519-9c2d-4088ad2a8638'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test               </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 00:14:02</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 00:14:05</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>00:14:05</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-14-2022_1405.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='edbd0b77-6948-480d-8020-511485f43f7a'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeactiveListing              </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 00:14:13</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 00:14:17</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>00:14:17</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-14-2022_1417.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='812c54ef-cda0-43dd-87af-b4f68079a4ba'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ActiveListing             </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 00:14:25</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 00:14:29</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>00:14:29</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-14-2022_1429.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d52fc581-4334-4224-bcca-3a5bcf0ece91'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test            </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 00:14:37</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 00:14:48</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>00:14:48</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-14-2022_1448.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='eb2b050e-9675-4b39-9f80-36f131179ca4'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test           </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 00:14:56</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 00:15:01</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>00:15:01</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-15-2022_1500.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='e403eec8-4e32-4f98-932d-595a8a399845'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>AddShareSkill_Test          </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:47:19</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:47:21</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 2s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:47:21</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-47-2022_4721.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='207f6359-4021-434f-8fd3-ddd7ebbc8622'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test         </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:47:29</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:47:32</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:47:32</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-47-2022_4732.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='3f835f38-4a57-4add-8b00-367dc7a8f3df'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeactiveListing        </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:47:39</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:47:42</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:47:42</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-47-2022_4742.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='5e3e28f6-b24b-4764-b3da-e90c53da0d27'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ActiveListing       </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:47:50</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:47:52</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 2s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:47:52</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-47-2022_4752.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='9ef1a02e-feb6-4098-b1c1-5a37620b9d7b'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>AddShareSkill_Test      </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:54:06</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:54:15</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 9s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:54:15</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-54-2022_5415.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='ddbc65b4-b24b-45a9-893a-755239665499'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ViewlistedServiceDetails_Test     </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:54:23</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:54:26</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 3s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:54:26</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-54-2022_5426.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='d868e935-0635-4b84-85d3-fc8807961c89'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeactiveListing    </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:54:33</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:54:38</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 5s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:54:38</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-54-2022_5437.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='70ca55e4-b59c-4b28-84ea-d961ba9e8c0e'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>ActiveListing   </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:54:45</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:54:49</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:54:49</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-54-2022_5449.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='ccbb6e37-c296-4e8e-af34-6995ee743fa8'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>EditShareSkill_Test  </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:54:57</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:55:08</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 11s+0ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status pass'><i class='mdi-action-check-circle'></i></td><td class='timestamp'>11:55:08</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-55-2022_5507.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li>                                                            <li class='collection-item test displayed active pass ' extentid='238eed5a-0553-41d7-a771-872168329793'>
                                                                <div class='test-head'>
                                                                    <span class='test-name'>DeleteShareSkill_Test </span>
                                                                    <span class='test-status right label capitalize outline pass'>pass</span>
                                                                    <span class='category-assigned hide '></span>
                                                                </div>
                                                                <div class='test-body'>
                                                                    <div class='test-info'>
                                                                        <span title='Test started time' alt='Test started time' class='test-started-time label green lighten-2 text-white'>2022-06-20 11:55:15</span>
                                                                        <span title='Test ended time' alt='Test ended time' class='test-ended-time label red lighten-2 text-white'>2022-06-20 11:55:20</span>
                                                                        <span title='Time taken to finish' alt='Time taken to finish' class='test-time-taken label blue-grey lighten-3 text-white'>0h 0m 4s+636ms</span>
                                                                    </div>
                                                                    <div class='test-desc'></div>
                                                                    <div class='test-attributes'>
                                                                                                                                            </div>
                                                                    <div class='test-steps'>
                                                                            <table class='bordered table-results'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Status</th>
                                                                                        <th>Timestamp</th>
                                                                                        <th>Details</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <td class='status info'><i class='mdi-action-info-outline'></i></td><td class='timestamp'>11:55:20</td>                                                                                            <td class='step-details'>Image example: C:\Users\dell\source\repos\CompetitionTask\MarsFramework\TestReports\Report_20-55-2022_5520.jpeg</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div></div></li></ul></div></div></div></div><div id='test-details-wrapper' class='col _addedCell2'><div class='contents'><div class='card-panel details-view'><h5 class='details-name'></h5><div class='step-filters right'><span class='info' alt='info' title='info'><i class='mdi-action-info-outline'></i></span> <span class='pass' alt='pass' title='pass'><i class='mdi-action-check-circle'></i></span> <span class='fail' alt='fail' title='fail'><i class='mdi-navigation-cancel'></i></span> <span class='fatal' alt='fatal' title='fatal'><i class='mdi-navigation-cancel'></i></span> <span class='error' alt='error' title='error'><i class='mdi-alert-error'></i></span> <span class='warning' alt='warning' title='warning'><i class='mdi-alert-warning'></i></span> <span class='skip' alt='skip' title='skip'><i class='mdi-content-redo'></i></span> <span class='clear-step-filter' alt='Clear filters' title='Clear filters'><i class='mdi-content-clear'></i></span></div><div class='details-container'></div></div></div></div></div><!-- /tests --><!-- categories --><!-- /categories --><!-- exceptions --><!-- /exceptions --><!-- testrunner logs --><!-- /testrunner logs --></div><!-- modals --><div id='test-count-setting' class='modal bottom-sheet'> <div class='modal-content'> <h5>Configure Tests Count Setting</h5> <input name='test-count-setting' type='radio' id='parentWithoutNodes' class='with-gap'> <label for='parentWithoutNodes'>Parent Tests Only (Does not include child nodes in counts)</label> <br> <input name='test-count-setting' type='radio' id='parentWithoutNodesAndNodes' class='with-gap'> <label for='parentWithoutNodesAndNodes'>Parent Tests Without Child Tests + Child Tests</label> <br> <input name='test-count-setting' type='radio' id='childNodes' class='with-gap'> <label for='childNodes'>Child Tests Only</label> </div> <div class='modal-footer'> <a href='#!' class='modal-action modal-close waves-effect waves-green btn'>Save</a> </div> </div> <div id='step-status-filter' class='modal bottom-sheet'> <div class='modal-content'> <h5>Select Status</h5> <input checked class='filled-in' type='checkbox' id='step-dashboard-filter-pass'> <label for='step-dashboard-filter-pass'>Pass</label> <br> <input checked class='filled-in' type='checkbox' id='step-dashboard-filter-fail'> <label for='step-dashboard-filter-fail'>Fail</label> <br> <input checked class='filled-in' type='checkbox' id='step-dashboard-filter-fatal'> <label for='step-dashboard-filter-fatal'>Fatal</label> <br> <input checked class='filled-in' type='checkbox' id='step-dashboard-filter-error'> <label for='step-dashboard-filter-error'>Error</label> <br> <input checked class='filled-in' type='checkbox' id='step-dashboard-filter-warning'> <label for='step-dashboard-filter-warning'>Warning</label> <br> <input checked class='filled-in' type='checkbox' id='step-dashboard-filter-skip'> <label for='step-dashboard-filter-skip'>Skipped</label> <br> <input checked class='filled-in' type='checkbox' id='step-dashboard-filter-info'> <label for='step-dashboard-filter-info'>Info</label> <br> <input checked class='filled-in' type='checkbox' id='step-dashboard-filter-unknown'> <label for='step-dashboard-filter-unknown'>Unknown</label> </div> <div class='modal-footer'> <a href='#!' class='modal-action modal-close waves-effect waves-green btn'>Save</a> </div></div><!-- /modals --><script src='https://cdn.rawgit.com/anshooarora/extentreports/051be9b627c84bde3591f7e6268e8b70e334a760/cdn/extent.js' type='text/javascript'></script><script>$(document).ready(function() { $('.logo span').html('ExtentReports'); });</script><script>
                $(document).ready(function() {
                    
                });
            </script></body></html>