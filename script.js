document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.topic-button');
  const infoItems = document.querySelectorAll('.info-item');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');
          infoItems.forEach(item => {
              if (item.id === targetId) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const shapes = [
        {
            id: "info-1",
            name: "Hình tròn",
            formulas: [
                {
                    label: "Chu vi",
                    inputs: ["r"],
                    calculate: (r) => 2 * Math.PI * r,
                    unit: ""
                },
                {
                    label: "Diện tích",
                    inputs: ["r"],
                    calculate: (r) => Math.PI * r * r,
                    unit: ""
                },
            ],
        },
        {
            id: "info-2",
            name: "Hình chữ nhật",
            formulas: [
                {
                    label: "Chu vi",
                    inputs: ["a", "b"],
                    calculate: (a, b) => 2 * (a + b),
                    unit: ""
                },
                {
                    label: "Diện tích",
                    inputs: ["a", "b"],
                    calculate: (a, b) => a * b,
                    unit: ""
                },
            ],
        },
        {
            id: "info-3",
            name: "Hình vuông",
            formulas: [
                {
                    label: "Chu vi",
                    inputs: ["a"],
                    calculate: (a) => 4 * a,
                    unit: ""
                },
                {
                    label: "Diện tích",
                    inputs: ["a"],
                    calculate: (a) => a * a,
                    unit: ""
                },
            ],
        },
    {
        id: "info-4",
        name: "Hình bình hành",
        formulas: [
            {
                label: "Chu vi",
                inputs: ["a", "b"],
                calculate: (a, b) => 2 * (a + b),
                unit: ""
            },
            {
                label: "Diện tích",
                inputs: ["a", "h"],
                calculate: (a, h) => a * h,
                unit: ""
            },
        ],
    },
        {
            id: "info-5",
            name: "Hình thoi",
            formulas: [
                {
                    label: "Chu vi",
                    inputs: ["a"],
                    calculate: (a) => 4*a,
                    unit: ""
                },
                {
                    label: "Diện tích",
                    inputs: ["d1", "d2"],
                    calculate: (d1, d2) => (d1 * d2) / 2,
                    unit: ""
                },
            ],
        },
        {
            id: "info-6",
            name: "Hình thang",
            formulas: [
                {
                    label: "Chu vi",
                    inputs: ["a", "b", "c","d"],
                    calculate: (a, b, c, d) => a + b + c + d,
                    unit: ""
                },
                {
                    label: "Diện tích",
                    inputs: ["a", "b", "h"],
                    calculate: (a, b, h) => ((a + b) * h) / 2,
                    unit: ""
                },
            ],
        },
        {
        
            id: "info-7",
            name: "Tam giác thường",
            formulas: [
                {
                    label: "Chu vi",
                    inputs: ["a", "b", "c"],
                    calculate: (a, b, c) => a + b + c,
                    unit: ""
                },
                {
                    label: "Diện tích",
                    inputs: ["b", "h"],
                    calculate: (b, h) => 0.5 * b * h,
                    unit: ""
                },
            ],
        },
        {
            id: "info-8",
            name: "Tam giác vuông",
            formulas: [
                {
                    label: "Chu vi",
                    inputs: ["a", "b"],
                    
                    calculate: (a, b) => {
                        const c = Math.sqrt(a * a + b * b);
                        return a + b + c;
                    },
                    unit: ""
                },
                {
                    label: "Diện tích",
                    inputs: ["a","b"],
                    calculate: (a,b) => 0.5 * a * b,
                    unit: ""
                },
            ],
        },
        {
            id: "info-9",
            name: "Tam giác cân",
            formulas: [
              {
                label: "Chu vi",
                inputs: ["a", "b"], 
                calculate: (a, b) => 2 * a + b,
                unit: ""
              },
              {
                label: "Diện tích",
                inputs: ["a", "b"],
                calculate: (a, b) => {
                  const h = Math.sqrt(a * a - (b * b) / 4); 
                  return 0.5 * b * h;
                },
                unit: ""
              }
            ]
        },
        {
            id: "info-10",
            name: "Hình lập phương",
            formulas: [
                {
                    label: "Diện tích toàn phần",
                    inputs: ["a"],
                    calculate: (a) => 6 * a * a,
                    unit: ""
                },
                {
                    label: "Thể tích",
                    inputs: ["a"],
                    calculate: (a) => a * a * a,
                    unit: ""
                },
            ],
        },
        {
            id: "info-11",
            name: "Hình hộp chữ nhật",
            formulas: [
                {
                    label: "Diện tích toàn phần",
                    inputs: ["a", "b", "c"],
                    calculate: (a, b, c) => 2 * (a * b + b * c + c * a),
                    unit: ""
                },
                {
                    label: "Thể tích",
                    inputs: ["a", "b", "c"],
                    calculate: (a, b, c) => a * b * c,
                    unit: ""
                },
            ],
        },
        {
            id: "info-12",
            name: "Hình cầu",
            formulas: [
                {
                    label: "Diện tích mặt cầu",
                    inputs: ["r"],
                    calculate: (r) => 4 * Math.PI * r * r,
                    unit: ""
                },
                {
                    label: "Thể tích",
                    inputs: ["r"],
                    calculate: (r) => (4 / 3) * Math.PI * Math.pow(r, 3),
                    unit: ""
                },
            ],
        },
        {
            id: "info-13",
            name: "Hình nón",
            formulas: [
                {
                    label: "Diện tích mặt xung quanh",
                    inputs: ["r", "l"],
                    calculate: (r, l) => Math.PI * r * l,
                    unit: ""
                },
                {
                    label: "Diện tích toàn phần",
                    inputs: ["r", "l"],
                    calculate: (r, l) => Math.PI * r * (r + l),
                    unit: ""
                },
                {
                    label: "Thể tích",
                    inputs: ["r", "h"],
                    calculate: (r, h) => (1 / 3) * Math.PI * r * r * h,
                    unit: ""
                },
            ],
        },
    ];

    const buttons = document.querySelectorAll(".topic-button");
    const infoItems = document.querySelectorAll(".info-item");

    let calculatorContainer = null;
    let currentShapeName = null; 

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            infoItems.forEach((item) => (item.style.display = "none"));
            const targetId = btn.getAttribute("data-target");
            const currentInfo = document.getElementById(targetId);
            currentInfo.style.display = "block";
            if (calculatorContainer) calculatorContainer.remove();
            const shape = shapes.find((s) => s.id === targetId);
            if (!shape) return;

            currentShapeName = shape.name; 

            calculatorContainer = document.createElement("div");
            calculatorContainer.className = "calculator-container";
            calculatorContainer.style.marginTop = "20px";
            calculatorContainer.style.padding = "10px";
            calculatorContainer.style.border = "1px solid #ccc";
            calculatorContainer.style.borderRadius = "8px";

            const title = document.createElement("h3");
            title.textContent = "Máy tính công thức " + shape.name;
            calculatorContainer.appendChild(title);

            shape.formulas.forEach((formula) => {
                const form = document.createElement("form");
                form.style.marginBottom = "15px";

                const title = document.createElement("h4");
                title.textContent = formula.label;
                form.appendChild(title);

                formula.inputs.forEach((inputName) => {
                    const inputContainer = document.createElement("div");
                    inputContainer.style.display = "flex";
                    inputContainer.style.alignItems = "center";
                    inputContainer.style.marginBottom = "10px";

                    const inputLabel = document.createElement("label");
                    inputLabel.textContent = inputName + ": ";
                    inputLabel.style.marginRight = "5px";
                    inputContainer.appendChild(inputLabel);

                    const input = document.createElement("input");
                    input.type = "number";
                    input.name = inputName;
                    input.step = "any";
                    input.required = true;
                    input.style.padding = "8px";
                    input.style.border = "1px solid #ddd";
                    input.style.borderRadius = "4px";
                    input.style.boxSizing = "border-box";
                    input.style.flex = "1";
                    inputContainer.appendChild(input);

                    form.appendChild(inputContainer);
                });

                const btnCalc = document.createElement("button");
                btnCalc.type = "submit";
                btnCalc.textContent = "Tính";
                btnCalc.style.marginLeft = "10px";
                btnCalc.style.padding = "10px 15px";
                btnCalc.style.backgroundColor = "#5cb85c";
                btnCalc.style.color = "white";
                btnCalc.style.border = "none";
                btnCalc.style.borderRadius = "4px";
                btnCalc.style.cursor = "pointer";
                form.appendChild(btnCalc);

                const result = document.createElement("div");
                result.style.marginTop = "5px";
                result.style.color = "green";
                form.appendChild(result);

                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const values = formula.inputs.map((name) =>
                        parseFloat(form.elements[name].value)
                    );
                    if (values.some(isNaN)) {
                        result.textContent = "Vui lòng nhập đầy đủ số hợp lệ!";
                        result.style.color = "red";
                        return;
                    }
                    try {
                        const res = formula.calculate(...values);
                        let resultText = `Kết quả: ${res.toFixed(4)} ${formula.unit}`;
                        
                        const decimalPart = (res % 1).toFixed(4); 
                        if (decimalPart === "0.0000") {
                            resultText = `Kết quả: ${Math.floor(res)} ${formula.unit}`; // Hiển thị phần nguyên
                        } else {
                            let decimalPlaces = 0;
                            const resString = res.toString();
                            if (resString.includes('.')) {
                                for (let i = resString.length - 1; i > resString.indexOf('.'); i--) {
                                    if (resString[i] !== '0') {
                                        decimalPlaces = resString.length - 1 - i;
                                        break;
                                    }
                                }
                                if (decimalPlaces > 0) {
                                    resultText = `Kết quả: ${res.toFixed(decimalPlaces)} ${formula.unit}`;
                                } else {
                                    resultText = `Kết quả: ${res.toFixed(4)} ${formula.unit}`;
                                }
                            } else {
                                resultText = `Kết quả: ${res} ${formula.unit}`;
                            }
                        }
                        
                        result.textContent = resultText;
                        result.style.color = "green";
                    } catch {
                        result.textContent = "Lỗi tính toán.";
                        result.style.color = "red";
                    }
                });

                calculatorContainer.appendChild(form);
            });

            currentInfo.appendChild(calculatorContainer);
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const infoItems = document.querySelectorAll('.info-item');

    searchInput.addEventListener('input', function () {
        const keyword = searchInput.value.toLowerCase();
        const buttons = document.querySelectorAll('.topic-button');
        let firstMatch = null;

        buttons.forEach(button => {
            const targetId = button.getAttribute('data-target');
            const item = document.getElementById(targetId);
            const title = item.querySelector('h3').innerText.toLowerCase(); 

            if (title.includes(keyword)) {
                button.style.display = 'inline-block';
                if (!firstMatch) firstMatch = button;
            } else {
                button.style.display = 'none';
            }
        });

        infoItems.forEach(item => {
            item.style.display = 'none';
        });
    });
});
