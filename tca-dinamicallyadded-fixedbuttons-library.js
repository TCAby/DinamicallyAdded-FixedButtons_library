/*
    jQuery Dinamically Added FixedButtons Plugin
    Changes input type="radio" or type="checkbox" to button style with visible status (button fix-pressed/unpressed)
    Copyright (c) 2022-2023 Vitaly Trakhtenberg (tca.by)
    Licensed under the GPL license (https://tools.tca.by/software/dinamicallyadded-fixedbuttons-plugin/#license)
    Version: 1.0.4
*/

/**
 *
 * @param blockID
 * @param arrayList
 * @param nameArrayID
 * @param nameArrayValue
 * @param checkedButtons
 * @param buttonsIDpattern
 * @param buttonsGroupName
 * @param buttonsClassPattern
 * @param buttonsType
 * @param additionalClass
 * @returns {boolean}
 *
 * Example:
 *  Function using: createButtonsSet("#itemsAQ", arraySet, 'qualification', "cdetail_id", "detail_value", 'qlf_', 'qualification', 'pcab-input-','checkbox')
 *      fills <div id="itemsSkills"></div> with set of button checkboxes (multi selectionn allowed) from array:
 *      [{cdetail_id: '1', detail_value: 'Care of exotic plants'}, {cdetail_id: '3', detail_value: 'Pines, cedars, and other resinous trees'}]
 *  Result:
 *      <div class="mb-3 input-group flex-nowrap" id="itemsAQ">
 *          <input class="pcab-input-checkbox  " id="qlf_1" type="checkbox" value="1" name="qualification" checked="" hidden="">
*               <label class="pcab-label-checkbox" for="qlf_1">Care of exotic plants</label>
 *          <input class="pcab-input-checkbox  " id="qlf_3" type="checkbox" value="3" name="qualification" checked="" hidden="">
 *              <label class="pcab-label-checkbox" for="qlf_3">Pines, cedars, and other resinous trees</label>
*       </div>
 *
 * Note: appearance depends on CSS parameters
 */
function createButtonsSet(
    /* string - ID of element-"wrapper" of the created set of buttons */ blockID,
    /* Object/Array of source data for the buttons, like arrayList[(nameArrayID : id, nameArrayValue : value)] */ arrayList,
    /* string - the name of the array property for the element id */ nameArrayID,
    /* string - the name of the array property for the element value */ nameArrayValue,
    /* Array of pressed (checked) buttons */ checkedButtons,
    /* string - pattern how to build 'id' of the button */ buttonsIDpattern,
    /* string - buttons group name */ buttonsGroupName = '',
    /* string - pattern how to build 'class' of the button */ buttonsClassPattern = 'input-',
    /* string - pattern how to build 'class' of the label of the button */ buttonsLabelClassPattern = 'label-',
    /* string - type of the button. Checked for 'checkbox' and 'radio' */ buttonsType = 'checkbox',
    /* string - additonal class(-es) for the button */ additionalClass = ''
)
{
    blockID = String(blockID)   // prevent blockID values likes 19 etc.
    try {
        if ( !document.querySelector(blockID) ) {
            return false
        }
    } catch (e) {
        if (e instanceof DOMException) {
            console.log('Incorrect ID of the block :"' + blockID + '"')
        }
        console.log(e)
    }
    if (typeof arrayList != 'object') {
        console.log('Wrong arrayList type. Needs "object", given: ', typeof arrayList)
        return false
    }
    $(blockID).html('')
    $.each(arrayList, function(k, v) {
        if ( typeof checkedButtons != 'undefined' && (typeof checkedButtons == 'array' || typeof checkedButtons == 'object') ) {
            let tmpCheckedButtons
            if (typeof checkedButtons == 'object') {
                tmpCheckedButtons = Object.values(checkedButtons)
            } else {
                tmpCheckedButtons = checkedButtons
            }
            if ( tmpCheckedButtons.includes( v[nameArrayID] ) ) {
                checkedVal = ' checked'
            } else {
                checkedVal = ''
            }
        } else {
            checkedVal = ''
        }
        $(blockID).append('<input class="' + buttonsClassPattern + buttonsType + ' " id="' + buttonsIDpattern + v[nameArrayID] + '" type="' + buttonsType + '" value="' + v[nameArrayID] + '" name="' + buttonsGroupName + '"' + checkedVal + ' hidden ><label class="' + buttonsLabelClassPattern + buttonsType + ' ' + additionalClass + '" for="' + buttonsIDpattern + v[nameArrayID] + '">' + v[nameArrayValue] + '</label>')
    })

    return true
}

/**
 *
 * @param name
 * @returns {number}
 */
function numberCheckedButtons(name) {
    let numbChecked = 0
    for(let i = 0; i < $('[name=' + name + ']').length; i++) {
        if ($('[name=' + name + ']')[i].checked) {
            numbChecked ++
        }
    }

    return numbChecked
}

/**
 *
 * @param name
 * @returns {*[]}
 */
function arrayCheckedButtons(name) {
    let arrCheck = []
    for(let i = 0; i < $('[name=' + name + ']').length; i++) {
        if ($('[name=' + name + ']')[i].checked) {
            arrCheck.push( $('[name=' + name + ']')[i].value )
        }
    }

    return arrCheck
}


