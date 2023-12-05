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
                v: 0.85
              },
              A: {
                l: "Adjacent",
                v: 0.62
              },
              L: {
                l: "Local",
                v: 0.55
              },
              P: {
                l: "Physical",
                v: 0.2
              }
            }
          },
          AC: {
            l: "Attack Complexity",
            d: "",
            o: {
              L: {
                l: "Low",
                v: 0.77,
              },
              H: {
                l: "High",
                v: 0.44,
              },
            },
          },
          PR: {
            l: "Privileges Required",
            d: "",
            o: {
              N: {
                l: "None",
                v: 0.85,
              },
              L: {
                l: "Low",
                v: 0.62,
              },
              H: {
                l: "High",
                v: 0.27,
              },
            },
          },
          UI: {
            l: "User Interaction",
            d: "",
            o: {
              N: {
                l: "None",
                v: 0.85,
              },
              R: {
                l: "Required",
                v: 0.62,
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
              U: {
                l: "Unchanged",
                v: 0,
              },
              C: {
                l: "Changed",
                v: 0,
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
              N: {
                l: "None",
                v: 0.85,
              },
              L: {
                l: "Low",
                v: 0.62,
              },
              H: {
                l: "High",
                v: 0.27,
              },
            },
          },
          I: {
            l: "Integrity",
            d: "",
            o: {
              N: {
                l: "None",
                v: 0.85,
              },
              L: {
                l: "Low",
                v: 0.62,
              },
              H: {
                l: "High",
                v: 0.27,
              },
            },
          },
          A: {
            l: "Availability",
            d: "",
            o: {
              N: {
                l: "None",
                v: 0.85,
              },
              L: {
                l: "Low",
                v: 0.62,
              },
              H: {
                l: "High",
                v: 0.27,
              },
            },
          },
        },
      },
    },
  },
};
