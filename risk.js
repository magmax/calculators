var riskTree = {
  L: {
    l: "Likelihood",
    d: "Rough measure of how likely this particular vulnerability is to be uncovered and exploited by an attacker",
    c: {
      TAF: {
        l: "Thread Agent Factors",
        d: "Estimate the likelihood of a successful attack by this group of threat agents, using the worst-case threat agent",
        c: {
          SL: {
            l: "Skill Level",
            d: "How technically skilled is this group of threat agents?",
            o: {
              NT: {
                l: "No technical skills",
                v: 1
              },
              ST: {
                l: "Some technical skills",
                v: 3
              },
              ACU: {
                l: "Advanced computer user",
                v: 5
              },
              NPS: {
                l: "Network and programming skills",
                v: 6
              },
              SPS: {
                l: "Security penetration skills",
                v: 9
              }
            }
          },
          M: {
            l: "Motive",
            d: "How motivated is this group of threat agents to find and exploit this vulnerability?",
            o: {
              L: {
                l: "Low or no reward",
                v: 1
              },
              P: {
                l: "Possible reward",
                v: 4
              },
              H: {
                l: "High reward",
                v: 9
              }
            }
          },
          O: {
            l: "Opportunity",
            d: "What resources and opportunities are required for this group of threat agents to find and exploit this vulnerability?",
            o: {
              F: {
                l: "Full access or expensive resources required",
                v: 0
              },
              X: {
                l: "Special access or resources required",
                v: 4
              },
              S: {
                l: "Some access or resources required",
                v: 7
              },
              N: {
                l: "No access or resources required",
                v: 9
              }
            }
          },
          S: {
            l: "Size",
            d: "How large is this group of threat agents?",
            o: {
              D: {
                l: "Developers",
                v: 2
              },
              A: {
                l: "System administrators",
                v: 2
              },
              I: {
                l: "Intranet users",
                v: 4
              },
              P: {
                l: "Partners",
                v: 5
              },
              U: {
                l: "Authenticated users",
                v: 6
              },
              N: {
                l: "Anonymous Internet users",
                v: 9
              }
            }
          }
        }
      },
      VF: {
        l: "Vulnerability Factors",
        d: "Estimate the likelihood of the particular vulnerability involved being discovered and exploited, assuming the threat agent selected before.",
        c: {
          ED: {
            l: "Ease of Discovery",
            d: "How easy is it for this group of threat agents to discover this vulnerability?",
            o: {
              I: {
                l: "Practically impossible",
                v: 1
              },
              D: {
                l: "Difficult",
                v: 3
              },
              E: {
                l: "Easy",
                v: 7
              },
              A: {
                l: "Automated tools available",
                v: 9
              }
            }
          },
          EE: {
            l: "Ease of Exploit",
            d: "How easy is it for this group of threat agents to actually exploit this vulnerability?",
            o: {
              T: {
                l: "Theoretical",
                v: 1
              },
              D: {
                l: "Difficult",
                v: 3
              },
              E: {
                l: "Easy",
                v: 5
              },
              A: {
                l: "Automated tools available",
                v: 9
              }
            }
          },
          A: {
            l: "Awareness",
            d: "How well known is this vulnerability to this group of threat agents?",
            o: {
              U: {
                l: "Unknown",
                v: 1
              },
              H: {
                l: "Hidden",
                v: 4
              },
              O: {
                l: "Obvious",
                v: 6
              },
              P: {
                l: "Public knowledge",
                v: 9
              }
            }
          },
          ID: {
            l: "Intrusion Detection",
            d: "How likely is an exploit to be detected?",
            o: {
              A: {
                l: "Active detection in application",
                v: 1
              },
              R: {
                l: "Logged and reviewed",
                v: 3
              },
              L: {
                l: "Logged without review",
                v: 8
              },
              N: {
                l: "Not logged",
                v: 9
              }
            }
          }
        }
      }
    }
  },
  I: {
    l: "Impact",
    d: "Impact of a successful attack",
    c: {
      TIF: {
        l: "Technical Impact Factors",
        d: "Estimate the magnitude of the impact on the system if the vulnerability were to be exploited",
        c: {
          C: {
            l: "Loss of Confidentiality",
            d: "How much data could be disclosed and how sensitive is it?",
            o: {
              MN: {
                l: "Minimal non-sensitive data disclosed",
                v: 2
              },
              MC: {
                l: "Minimal critical data disclosed",
                v: 6
              },
              EN: {
                l: "Extensive non-sensitive data disclosed",
                v: 6
              },
              EC: {
                l: "Extensive critical data disclosed",
                v: 7
              },
              A: {
                l: "All data disclosed",
                v: 9
              }
            }
          },
          I: {
            l: "Loss of Integrity",
            d: "How much data could be corrupted and how damaged is it?",
            o: {
              MN: {
                l: "Minimal slightly corrupt data",
                v: 1
              },
              MS: {
                l: "Minimal seriously corrupt data",
                v: 3
              },
              EN: {
                l: "Extensive slightly corrupt data",
                v: 5
              },
              ES: {
                l: "Extensive seriously corrupt data",
                v: 7
              },
              A: {
                l: "All data totally corrupt",
                v: 9
              }
            }
          },
          AV: {
            l: "Loss of Availability",
            d: "How much service could be lost and how vital is it?",
            o: {
              MS: {
                l: "Minimal secondary services interrupted",
                v: 1
              },
              MP: {
                l: "Minimal primary services interrupted",
                v: 5
              },
              ES: {
                l: "Extensive secondary services interrupted",
                v: 5
              },
              EP: {
                l: "Extensive primary services interrupted",
                v: 7
              },
              A: {
                l: "All services completely lost",
                v: 9
              }
            }
          },
          AC: {
            l: "Loss of Accountability",
            d: "Are the threat agents’ actions traceable to an individual?",
            o: {
              F: {
                l: "Fully traceable",
                v: 1
              },
              P: {
                l: "Possibly traceable",
                v: 7
              },
              A: {
                l: "Completely anonymous",
                v: 9
              }
            }
          }
        }
      },
      BIF: {
        l: "Business Impact Factors",
        d: "What’s truly important for security",
        c: {
          F: {
            l: "Financial damage",
            d: "How much financial damage will result from an exploit?",
            o: {
              L: {
                l: "Less than the cost to fix the vulnerability",
                v: 1
              },
              M: {
                l: "Minor effect on annual profit",
                v: 3
              },
              S: {
                l: "Significant effect on annual profit",
                v: 7
              },
              B: {
                l: "Bankruptcy",
                v: 9
              }
            }
          },
          R: {
            l: "Reputation damage",
            d: "Would an exploit result in reputation damage that would harm the business?",
            o: {
              N: {
                l: "Minimal damage",
                v: 1
              },
              M: {
                l: "Loss of major accounts",
                v: 4
              },
              G: {
                l: "Loss of goodwill",
                v: 5
              },
              A: {
                l: "Brand damage",
                v: 9
              }
            }
          },
          NC: {
            l: "Non-compliance",
            d: "How much exposure does non-compliance introduce?",
            o: {
              M: {
                l: "Minor violation",
                v: 2
              },
              C: {
                l: "Clear violation",
                v: 5
              },
              H: {
                l: "High profile violation",
                v: 7
              }
            }
          },
          P: {
            l: "Privacy violation",
            d: "How much personally identifiable information could be disclosed?",
            o: {
              O: {
                l: "One individual",
                v: 3,
              },
              H: {
                l: "Hundreds of people",
                v: 5,
              },
              T: {
                l: "Thousands of people",
                v: 7,
              },
              M: {
                l: "Millions of people",
                v: 9
              }
            }
          }
        }
      }
    }
  }
};

var calculate = (hash) => {
  var calculateTree = (tree) => {
    var result = 0;

    for (var letter in tree.c) {
      var node = tree.c[letter];
      result += node.o[hash[letter]].v;
    };

    return result;
  };

  var numToVal = (n) => {
    if (n < 3) {
      return 1;
    }
    if (n < 6) {
      return 2;
    }
    return 3;
  };

  var severities = ["Not enough information", "LOW", "MED", "HIGH", "CRITICAL"];

  var taf = calculateTree(riskTree.L.c.TAF);
  var vf = calculateTree(riskTree.L.c.VF);

  var likelyhood = (taf + vf) / 8;
  var technicalImpact = calculateTree(riskTree.I.c.TIF);
  var businessImpact = calculateTree(riskTree.I.c.BIF);
  var impact = (technicalImpact + businessImpact) / 8; // TODO: take into account "business impact information trust"

  console.log("technical impact: " + technicalImpact);
  console.log("business impact: " + businessImpact);
  console.log("likelyhood: " + likelyhood + " (" + severities[numToVal(likelyhood)] + ")");
  console.log("impact: " + impact + " (" + severities[numToVal(impact)] + ")");

  var score = numToVal(likelyhood);
  switch (numToVal(impact)) {
    case 1: score -= 1; break;
    case 2: break;
    case 3: score += 1; break;
  }

  var result = [0, 3, 6, 8, 10][score];
  console.log("Final score: " + score + "(" + severities[score] + ") --> " + result);
  return result;
};
