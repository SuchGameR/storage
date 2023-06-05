
// Inputのcheckの変数宣言
var element1 = document.getElementById('tab1');
var element2 = document.getElementById('tab2');
var element3 = document.getElementById('tab3');
var element4 = document.getElementById('tab4');
var element5 = document.getElementById('tab5');

// 関数
function tab1() {
  
}
function tab2() {
  
}
function tab3() {
  
}
function tab4() {
  
}
function tab5() {
  
}

function whatisselected2() {
  let tab_selected1 = document.querySelector("input[name=tab_name][id=tab1]:checked");
  if( tab_selected1 ) {
    console.log("TAB1 : ON");
  } else {
    let tab_selected2 = document.querySelector("input[name=tab_name][id=tab2]:checked");
    if( tab_selected2 ) {
      console.log("TAB2 : ON");
    } else {
      let tab_selected3 = document.querySelector("input[name=tab_name][id=tab3]:checked");
      if( tab_selected3 ) {
        console.log("TAB3 : ON");
      } else {
        let tab_selected4 = document.querySelector("input[name=tab_name][id=tab4]:checked");
        if( tab_selected4 ) {
          console.log("TAB4 : ON");
        } else {
          let tab_selected5 = document.querySelector("input[name=tab_name][id=tab5]:checked");
          if( tab_selected5 ) {
            console.log("TAB5 : ON");
          } 
        }  
      }     
    }
  }
  
}

// 古い関数
function whatisselected() {
  let tab_selected = document.querySelector("input[name=tab_name]:checked");
  if( tab_selected ) {
    console.log(tab_selected.value);
  }

}


// visited function
function saveData() {
  var nickname_settings = document.getElementById("nickname").value;
  localStorage.setItem("nickname", nickname_settings);
  const keyName = 'visited';
  const keyValue = true;
  
  if (!localStorage.getItem(keyName)) {
      //localStorageにキーと値を追加
      localStorage.setItem(keyName, keyValue);
      //ここに初回アクセス時の処理
      alert("初めての訪問です");
      location.href = "index.html";
  } else {
      //ここに通常アクセス時の処理
      alert("訪問済みです");
  
  }
}


// var image = document.getElementById("image");
// var body = document.body;

// image.addEventListener("mouseover", function() {
//   body.style.backgroundColor = "#ff0000"; /* 赤色に変更 */
// });

// image.addEventListener("mouseout", function() {
//   body.style.backgroundColor = "#ffffff"; /* 元の色に戻す */
// });


// フィルタリング機能
// const filterCheckboxes = document.querySelectorAll('.filterCheckbox');
// const itemList = document.getElementById('itemList');
// const items = itemList.getElementsByClassName('item');

// for (let i = 0; i < filterCheckboxes.length; i++) {
//   filterCheckboxes[i].addEventListener('change', updateFilter);
// }

// function updateFilter() {
//   const activeFilters = [];
//   for (let i = 0; i < filterCheckboxes.length; i++) {
//     if (filterCheckboxes[i].checked) {
//       activeFilters.push(filterCheckboxes[i].getAttribute('data-filter'));
//     }
//   }

//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     const itemFilters = item.classList;
//     let shouldDisplay = false;

//     for (let j = 0; j < activeFilters.length; j++) {
//       if (itemFilters.contains(activeFilters[j])) {
//         shouldDisplay = true;
//         break;
//       }
//     }

//     if (activeFilters.length === 0) {
//       shouldDisplay = true;
//     }

//     if (shouldDisplay) {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   }
// }