var cvs31Tree = {
  B: {
    l: "Base Score",
    d: "",
    c: {
      E: {
        l: "Exploitability",
        d: "",
        c: {
          AV: {
            l: "Attack Vector",
            d: "",
            o: {
              N: {
                l: "Network",
              },
              A: {
                l: "Adjacent",
              },
              L: {
                l: "Local",
              },
              P: {
                l: "Physical",
              }
            }
          },
          AC: {
            l: "Attack Complexity",
            d: "",
            o: {
              L: {
                l: "Low",
              },
              H: {
                l: "High",
              },
            },
          },
          PR: {
            l: "Privileges Required",
            d: "",
            o: {
              N: {
                l: "None",
              },
              L: {
                l: "Low",
              },
              H: {
                l: "High",
              },
            },
          },
          UI: {
            l: "User Interaction",
            d: "",
            o: {
              N: {
                l: "None",
              },
              R: {
                l: "Required",
              },
            },
          },
        },
      },
      S: {
        l: "Scope",
        d: "",
        c: {
          S: {
            l: "Scope",
            d: "",
            o: {
              C: {
                l: "Changed",
              },
              U: {
                l: "Unchanged",
              }
            },
          }
        }
      },
      I: {
        l: "Impact",
        d: "",
        c: {
          C: {
            l: "Confidentiality",
            d: "",
            o: {
              H: {
                l: "High",
              },
              L: {
                l: "Low",
              },
              N: {
                l: "None",
              }
            },
          },
          I: {
            l: "Integrity",
            d: "",
            o: {
              H: {
                l: "High",
              },
              L: {
                l: "Low",
              },
              N: {
                l: "None",
              }
            },
          },
          A: {
            l: "Availability",
            d: "",
            o: {
              H: {
                l: "High",
              },
              L: {
                l: "Low",
              },
              N: {
                l: "None",
              }
            },
          },
        },
      },
    },
  },
};

var Weight = {
  AV: {
    N: 0.85,
    A: 0.62,
    L: 0.55,
    P: 0.2
  },
  AC: {
    H: 0.44,
    L: 0.77
  },
  PR: {
    U: {
      N: 0.85,
      L: 0.62,
      H: 0.27
    },
    C: {
      N: 0.85,
      L: 0.68,
      H: 0.5
    }
  },
  UI: {
    N: 0.85,
    R: 0.62
  },
  CIA: {
    N: 0,
    L: 0.22,
    H: 0.56,
  },
};

var calculate = (hash) => {
  mandatory = ["AV", "AC", "PR", "UI", "S", "C", "I", "A"];
  for (var i in mandatory) {
    if (hash[mandatory[i]] == undefined) {
      return "";
    }
  }

  var minimum = Math.min;
  var roundup = (n) => {
    return Math.ceil(n * 10) / 10;
  };

  var iss = (
    1 - (
      (1 - Weight["CIA"][hash["C"]]) *
      (1 - Weight["CIA"][hash["I"]]) *
      (1 - Weight["CIA"][hash["A"]])
    )
  );
  var impact = hash["S"] == "U" ? 6.42 * iss : 7.52 * (iss - 0.029) - 3.25 * (iss - 0.02) ** 15;
  console.log(impact);

  var attackVector = Weight["AV"][hash["AV"]];
  var attackComplexity = Weight["AC"][hash["AC"]];
  var privilegeRequired = Weight["PR"][hash["S"]][hash["PR"]];
  var userInteraction = Weight["UI"][hash["UI"]];

  var exploitability = 8.22 * attackVector * attackComplexity * privilegeRequired * userInteraction;

  var baseScore = () => {
    if (impact <= 0) {
      return 0;
    }

    var base = impact + exploitability;

    if (hash["S"] == "C") {
      base *= 1.08;
    }
    return roundup(minimum(base , 10));
  }

  return baseScore();
};
