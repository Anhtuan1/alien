<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Ripple UI - Responsive Bootstrap 4 Admin & Dashboard Template</title>
    <!-- plugins:css -->
    <link
      rel="stylesheet"
      href="assets/vendors/iconfonts/mdi/css/materialdesignicons.css"
    />
    <link rel="stylesheet" href="assets/vendors/css/vendor.addons.css" />
    <!-- endinject -->
    <!-- vendor css for this page -->
    <link
      rel="stylesheet"
      href="assets/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css"
    />
    <!-- End vendor css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="assets/css/shared/style.css" />
    <!-- endinject -->
    <!-- Layout style -->
    <link rel="stylesheet" href="assets/css/demo_1/style.css" />
    <!-- Layout style -->
    <link rel="shortcut icon" href="asssets/images/favicon.ico" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body class="header-fixed">
    <!-- partial:partials/_header.html -->
    <nav class="t-header">
      <div class="t-header-brand-wrapper">
        <a href="index.html">
          <img class="logo" src="assets/images/logo.svg" alt="Logo" />
          <img
            class="logo-mini"
            src="assets/images/logo_mini.svg"
            alt="Logo"
          />
        </a>
        <button
          class="t-header-toggler t-header-desk-toggler d-none d-lg-block"
        >
          <svg class="logo" viewBox="0 0 200 200">
            <path
              class="top"
              d="
                M 40, 80
                C 40, 80 120, 80 140, 80
                C180, 80 180, 20  90, 80
                C 60,100  30,120  30,120
              "
            ></path>
            <path
              class="middle"
              d="
                M 40,100
                L140,100
              "
            ></path>
            <path
              class="bottom"
              d="
                M 40,120
                C 40,120 120,120 140,120
                C180,120 180,180  90,120
                C 60,100  30, 80  30, 80
              "
            ></path>
          </svg>
        </button>
      </div>
      
    </nav>
    <!-- partial -->
    <div class="page-body">
      <!-- partial:partials/_sidebar.html -->
      <div class="sidebar">
        <ul class="navigation-menu">
          <li class="nav-category-divider">MAIN</li>
          <li>
            <a href="index.html">
              <span class="link-title">Dashboard</span>
              <i class="mdi mdi-gauge link-icon"></i>
            </a>
          </li>
          <li class="nav-category-divider">DOCS</li>
          <li>
            <a href="docs/docs.html">
              <span class="link-title">Documentation</span>
              <i class="mdi mdi-asterisk link-icon"></i>
            </a>
          </li>
        </ul>
        
      </div>
      
      <div class="page-content-wrapper">
        <div class="page-content-wrapper-inner">
          <div class="content-viewport">
            <div class="row">
              <div class="col-lg-12 equel-grid">
                <div class="grid">
                  <div class="grid-body">
                    <div class="item-wrapper">
                      <div class="tab-container">
                        <ul class="nav nav-tabs" id="bt-tab_1" role="tablist">
                          <li class="nav-item">
                            <a class="nav-link active" id="bt-tab_1_1" data-toggle="tab" href="#bt-content_1_1" role="tab" aria-controls="bt-content_1_1" aria-selected="true">Import list page</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="bt-tab_1_2" data-toggle="tab" href="#bt-content_1_2" role="tab" aria-controls="bt-content_1_2" aria-selected="false">Import detail data</a>
                          </li>
                          
                        </ul>
                        <div class="tab-content bg-white">
                          <div class="tab-pane active" role="tabpanel" id="bt-content_1_1" aria-labelledby="bt-tab_1_1">
                            <form action="get_url_page.php" type="post" id="importUrlForm">
                              <div class="row">
                                <div class="col-md-12"> 
                                  <div class="form-group">
                                    <label for="url">Url</label>
                                    <input value="https://baito.mynavi.jp/kanagawa/ss-17/" type="text" class="form-control" id="url" placeholder="Enter your url" name="url_data">
                                  </div>
                                  <div class="form-group">
                                    <label for="class_data">Class</label>
                                    <input value=".jobOfferSearchListWrap .tabJobOfferCardContentWrap .informationTextWrap .jobOfferGTM" type="text" class="form-control" id="class_data" placeholder="Enter class" name="class_data">
                                  </div>
                                  <div class="form-group">
                                    <label for="sheet_id">Import Sheet id</label>
                                    <input value="1plRKwK7ttlxxnTD57-4r-TDRd1uMLIZbhMDBbot3Vwo" type="text" class="form-control" id="sheet_id" placeholder="Enter your Sheet id" name="sheet_data">
                                  </div>
                                </div>
                                <div class="col-md-6"> 
                                  <p class="grid-header">Google Sheet infomation</p>
                                  <div class="form-group">
                                    <label for="sheet_tag">Sheet tag</label>
                                    <input type="text" value="Sheet1" class="form-control" id="sheet_tag" placeholder="Enter Sheet tag" name="sheet_tag">
                                  </div>
                                  <div class="form-group">
                                    <label for="range_from">Range From</label>
                                    <input type="text" value="A1" class="form-control" id="range_from" placeholder="Enter range from" name="range_from">
                                  </div>
                                  <div class="form-group">
                                    <label for="range_to">Range To</label>
                                    <input type="text" value="A" class="form-control" id="range_to" placeholder="Enter range to" name="range_to">
                                  </div>
                                </div>
                                <div class="col-md-6"> 
                                  <p class="grid-header">Pagination page</p>
                                  <div class="form-group">
                                    <label for="total_result">Total result</label>
                                    <input type="number" value="1" class="form-control" id="total_result" placeholder="Enter total" name="total_result">
                                  </div>

                                  <div class="form-group">
                                    <label for="each_result">Number result for each page</label>
                                    <input type="number" value="30" class="form-control" id="each_result" placeholder="Enter Number result for each page" name="each_result">
                                  </div>
                                  <div class="form-group">
                                    <label for="each_result">Param of page number</label>
                                    <input type="text" value="?page=" class="form-control" id="param_page_number" placeholder="Enter Param of page number" name="param_page_number">
                                  </div>
                                </div>
                                <div class="col-md-12 text-center"> 
                                  <button type="button" class="btn btn-md btn-primary" id="import_url">Import</button>
                                </div>
                              </div>
                            </form>

                            <div class="text-center mt-2">
                              <div id="result_list"></div>
                            </div>
                          </div>


                          <div class="tab-pane" role="tabpanel" id="bt-content_1_2" aria-labelledby="bt-tab_1_2">
                          <form action="import_data_page.php" type="post" id="importUrlForm">
                              <div class="row">
                                <div class="col-md-6"> 
                                  <p class="grid-header">Google Sheet of List url</p>
                                  <div class="form-group">
                                    <label for="sheet_read">Sheet ID (read)</label>
                                    <input value="1plRKwK7ttlxxnTD57-4r-TDRd1uMLIZbhMDBbot3Vwo" type="text" class="form-control" id="sheet_read" placeholder="Enter your sheet id" name="sheet_read">
                                  </div> 
                                  <div class="form-group">
                                    <label for="sheet_tag_read">Sheet tag (read)</label>
                                    <input type="text" value="Sheet1" class="form-control" id="sheet_tag_read" placeholder="Enter Sheet tag" name="sheet_tag_read">
                                  </div>
                                  <div class="form-group">
                                    <label for="range_from_read">Range From (read)</label>
                                    <input type="text" value="A1" class="form-control" id="range_from_read" placeholder="Enter range from" name="range_from_read">
                                  </div>
                                  <div class="form-group">
                                    <label for="range_to_read">Range To (read)</label>
                                    <input type="text" value="A" class="form-control" id="range_to_read" placeholder="Enter range to" name="range_to_read">
                                  </div>
                                </div>
                                <div class="col-md-6"> 
                                  <p class="grid-header">Google Sheet import</p>
                                  <div class="form-group">
                                    <label for="sheet_read">Sheet ID (import)</label>
                                    <input value="1plRKwK7ttlxxnTD57-4r-TDRd1uMLIZbhMDBbot3Vwo" type="text" class="form-control" id="sheet_read" placeholder="Enter your sheet id" name="sheet_read">
                                  </div> 
                                  <div class="form-group">
                                    <label for="sheet_tag_import">Sheet tag</label>
                                    <input type="text" value="Sheet1" class="form-control" id="sheet_tag_import" placeholder="Enter Sheet tag" name="sheet_tag_import">
                                  </div>
                                  <div class="form-group">
                                    <label for="range_from_import">Range From</label>
                                    <input type="text" value="A1" class="form-control" id="range_from_import" placeholder="Enter range from" name="range_from_import">
                                  </div>
                                  <div class="form-group">
                                    <label for="range_to_import">Range To</label>
                                    <input type="text" value="X" class="form-control" id="range_to_import" placeholder="Enter range to" name="range_to_import">
                                  </div>
                                </div>
                                <div class="col-md-6"> 
                                  <div class="form-group">
                                    <label for="select_num_field">Select amount Field</label>
                                    <select id="amount_field" class="form-control">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                      <option value="13">13</option>
                                      <option value="14">14</option>
                                      <option value="15">15</option>
                                      <option value="16">16</option>
                                      <option value="17">17</option>
                                      <option value="18">18</option>
                                    </select>
                                  </div>

                                  
                                </div>

                                <div id="listOfdata">
                                  <div class="col-md-12 grid-body bg-light mb-3"> 
                                    <div class="form-group">
                                      <label for="select_num_field" dataField="1">#1</label>
                                      <div class="row">
                                        <div class="col-md-2"> 
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault[]" value="type1">
                                            <label class="form-check-label" for="type1" datatext="<b>Param 1</b>: null, <b>Param 2</b>: null, <b>Param 3</b>: null">
                                              URL base
                                            </label>
                                          </div>
                                        </div>
                                        <div class="col-md-2"> 
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault[]" value="type2" checked>
                                            <label class="form-check-label" for="type2" datatext="<b>Param 1</b>: text, <b>Param 2</b>: null, <b>Param 3</b>: null">
                                              Text
                                            </label>
                                          </div>
                                        </div>
                                        <div class="col-md-2"> 
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault[]" value="type3">
                                            <label class="form-check-label" for="type3" datatext="<b>Param 1</b>: null, <b>Param 2</b>: class, <b>Param 3</b>: index of class">
                                              Element class
                                            </label>
                                          </div>
                                        </div>
                                        <div class="col-md-2"> 
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault[]" value="type4">
                                            <label class="form-check-label" for="type4" datatext="<b>Param 1</b>: null, <b>Param 2</b>: text, <b>Param 3</b>: class">
                                              Table (th td)
                                            </label>
                                          </div>
                                        </div>
                                        <div class="col-md-2"> 
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault[]" value="type5">
                                            <label class="form-check-label" for="type5" datatext="<b>Param 1</b>: null, <b>Param 2</b>: class, <b>Param 3</b>: null">
                                              Tags
                                            </label>
                                          </div>
                                        </div>
                                        <div class="col-md-2"> 
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault[]" id="type6">
                                            <label class="form-check-label" for="type6">
                                              Multi text array
                                            </label>
                                          </div>
                                        </div>
                                        <div class="col-md-12">
                                          <div class="alert alert-success" role="alert">
                                            <b>Param 1</b>: text, <b>Param 2</b>: null, <b>Param 3</b>: null
                                          </div>
                                        </div>
                                        <div class="col-md-4">
                                          <div class="form-group">
                                            <div class="row">
                                              <div class="col-md-3 showcase_text_area">
                                                <label for="inputType1">Param 1</label>
                                              </div>
                                              <div class="col-md-9 showcase_content_area">
                                                <input type="text" class="form-control" placeholder="Enter Param 1" name="param1[]">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="col-md-4">
                                          <div class="form-group">
                                            <div class="row">
                                              <div class="col-md-3 showcase_text_area">
                                                <label for="inputType1">Param 2</label>
                                              </div>
                                              <div class="col-md-9 showcase_content_area">
                                                <input type="text" class="form-control" placeholder="Enter Param 2" name="param2[]">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="col-md-4">
                                          <div class="form-group">
                                            <div class="row">
                                              <div class="col-md-3 showcase_text_area">
                                                <label for="inputType1">Param 3</label>
                                              </div>
                                              <div class="col-md-9 showcase_content_area">
                                                <input type="text" class="form-control" placeholder="Enter Param 3" name="param3[]">
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <hr/>
                                      </div>
                                      
                                    </div>
                                  </div>
                                </div>

                                <div class="col-md-12 text-center"> 
                                  <button type="button" class="btn btn-md btn-primary" id="import_url">Import</button>
                                </div>
                              </div>
                            </form>


                            <div class="text-center mt-2">
                              <div id="result_list_detail"></div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>


                  </div>
                </div>
                
              </div>
              
              <div class="col-lg-12 equel-grid d-none" id="getdata">
                <div class="grid">
                  <p class="grid-header">Get data</p>
                  <div class="grid-body">
                    <div class="item-wrapper">
                        <div class="form-group">
                          <label for="sheet_id_get">Sheet id</label>
                          <input type="text" class="form-control" id="sheet_id_get" placeholder="Enter your Sheet id">
                        </div>
                        <div class="form-group">
                          <label for="Amount_field">Amount fields</label>
                          <input type="number" class="form-control" id="Amount_field" placeholder="1" min="1" value="1">
                        </div>
                        <button type="submit" class="btn btn-sm btn-primary" id="create_form">Create</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content viewport ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="row">
            <div class="col-sm-6 text-center text-sm-right order-sm-1">
              <ul class="text-gray">
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
              <small class="text-muted d-block"
                >Copyright © 2021
               
            </div>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- page content ends -->
    </div>
    <script>
    $( document ).ready(function() {
      console.log(345);
      $("#import_url").click(function(e) {
        console.log(123);
        e.preventDefault(); // avoid to execute the actual submit of the form.
        $(this).prop("disabled", true);
        $(this).html(
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> processing...`
        );
        var form = $("#importUrlForm");
        var url = form.attr('action');

        $.ajax({
              type: "POST",
              url: url,
              data: form.serialize(), // serializes the form's elements.
              success: function(data)
              {
                $("#import_url").prop("disabled", false);
                $("#import_url").html(
                `Import`
                );
                $("#result_list").html(data);
              },
              error: function (data) {
                $("#import_url").prop("disabled", false);
                $("#import_url").html(
                `Import`
                );
                $("#result_list").html(data);
              },
            });


      });
    });
    </script>
    <!--page body ends -->
    <!-- SCRIPT LOADING START FORM HERE /////////////-->
    <!-- plugins:js -->
    
    <script src="assets/vendors/js/vendor.addons.js"></script>
    <script src="assets/vendors/js/core.js"></script>
    <!-- build:js -->
    <script src="assets/js/template.js"></script>
    <script src="assets/js/dashboard.js"></script>

    
    
  </body>
</html>
