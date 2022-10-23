<h1 align="center">Hi there,<br><strong>&laquo;𝔻𝕚𝕟𝕒𝕞𝕚𝕔𝕒𝕝𝕝𝕪 𝔸𝕕𝕕𝕖𝕕 𝔽𝕚𝕩𝕖𝕕 𝔹𝕦𝕥𝕥𝕠𝕟𝕤 𝕡𝕝𝕦𝕘𝕚𝕟&raquo;</strong> welcomes you!  
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h2 align="center">jQuery Plugin</h2>

How can this plugin be useful to you?
<img src="https://tools.tca.by/plugins/DinamicallyAdded-FixedButtons_library/DinamicallyAdded-FixedButtons_library.png" alt="example">
Imagine you have an array of possible options from which your user needs to select one or more values. 
Of course, you can use standard elements, radios or checkboxes. And you can do it beautifully and non-standard, with the help of buttons that are fixed in the pressed state - just like in the picture!

<h3 align="center">How to use</h3>
<h4>JS-part/calls</h4>

##### Example: #####
Function using: 
    createButtonsSet("#itemsAQ", arraySet, 'qualification', "cdetail_id", "detail_value", 'qlf_', 'qualification', 'pcab-input-','checkbox')
fills <div id="itemsSkills"></div> with set of button checkboxes (multi selectionn allowed) 
from array: [{cdetail_id: '1', detail_value: 'Care of exotic plants'}, {cdetail_id: '3', detail_value: 'Pines, cedars, and other resinous trees'}]

##### Result: #####
    <div class="mb-3 input-group flex-nowrap" id="itemsAQ">
        <input class="pcab-input-checkbox  " id="qlf_1" type="checkbox" value="1" name="qualification" checked="" hidden="">
            <label class="pcab-label-checkbox" for="qlf_1">Care of exotic plants</label>
        <input class="pcab-input-checkbox  " id="qlf_3" type="checkbox" value="3" name="qualification" checked="" hidden="">
            <label class="pcab-label-checkbox" for="qlf_3">Pines, cedars, and other resinous trees</label>
    </div>
	
##### List of functions #####
+ createButtonsSet() - creates set of buttons. You can use multiple sets on the page, it manages the third parameter - 'qualification' in the example above;
+ numberCheckedButtons() - returns how many buttons in the set are pressed;
+ arrayCheckedButtons() - returns array of value(-s) of pressed buttons for the set.	

<h4>CSS</h4>

Don't forget to upload the CSS file as well. It contains the secret of why a button looks like a button but behaves like an input (radio or checkbox).

Do not forget that the names of the classes in css must match the classes that will be obtained after passing the parameters of the createButtonsSet function call.