var cvs40Tree = {
  B: {
    l: "Base Score",
    d: "The Base Score reflects the severity of a vulnerability according to its intrinsic characteristics which are constant over time and assumes the reasonable worst-case impact across different deployed environments.",
    c: {
      E: {
        l: "Exploitability",
        d: "The Exploitability metrics reflect the ease and technical means by which the vulnerability can be exploited.",
        c: {
          AV: {
            l: "Attack Vector",
            d: "This metric reflects the context by which vulnerability exploitation is possible.",
            o: {
              N: {
                l: "Network",
                d: "The vulnerable system is bound to the network stack and the set of possible attackers extends beyond the other options listed below, up to and including the entire Internet. Such a vulnerability is often termed “remotely exploitable” and can be thought of as an attack being exploitable at the protocol level one or more network hops away (e.g., across one or more routers)."
              },
              A: {
                l: "Adjacent",
                d: "The vulnerable system is bound to a protocol stack, but the attack is limited at the protocol level to a logically adjacent topology. This can mean an attack must be launched from the same shared proximity (e.g., Bluetooth, NFC, or IEEE 802.11) or logical network (e.g., local IP subnet), or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN within an administrative network zone)."
              },
              L: {
                l: "Local",
                d: "The vulnerable system is not bound to the network stack and the attacker’s path is via read/write/execute capabilities. Either: the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or through terminal emulation (e.g., SSH); or the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., using social engineering techniques to trick a legitimate user into opening a malicious document)."
              },
              P: {
                l: "Physical",
                d: "The attack requires the attacker to physically touch or manipulate the vulnerable system. Physical interaction may be brief (e.g., evil maid attack1) or persistent. An example of such an attack is a cold boot attack in which an attacker gains access to disk encryption keys after physically accessing the target system."
              }
            }
          },
          AC: {
            l: "Attack Complexity",
            d: "This metric captures measurable actions that must be taken by the attacker to actively evade or circumvent existing built-in security-enhancing conditions in order to obtain a working exploit. These are conditions whose primary purpose is to increase security and/or increase exploit engineering complexity.",
            o: {
              L: {
                l: "Low",
                d: "The attacker must take no measurable action to exploit the vulnerability. The attack requires no target-specific circumvention to exploit the vulnerability. An attacker can expect repeatable success against the vulnerable system."
              },
              H: {
                l: "High",
                d: "The successful attack depends on the evasion or circumvention of security-enhancing techniques in place that would otherwise hinder the attack. These include: Evasion of exploit mitigation techniques. The attacker must have additional methods available to bypass security measures in place."
              },
            },
          },
          AT: {
            l: "Attack Requirements",
            d: "This metric captures the prerequisite deployment and execution conditions or variables of the vulnerable system that enable the attack.",
            o: {
              N: {
                l: "None",
                d: "The successful attack does not depend on the deployment and execution conditions of the vulnerable system. The attacker can expect to be able to reach the vulnerability and execute the exploit under all or most instances of the vulnerability."
              },
              P: {
                l: "Present",
                d: "The successful attack depends on the presence of specific deployment and execution conditions of the vulnerable system that enable the attack. These include: A race condition must be won to successfully exploit the vulnerability. The successfulness of the attack is conditioned on execution conditions that are not under full control of the attacker. The attack may need to be launched multiple times against a single target before being successful. Network injection. The attacker must inject themselves into the logical network path between the target and the resource requested by the victim."
              },
            },
          },
          PR: {
            l: "Privileges Required",
            d: "This metric describes the level of privileges an attacker must possess prior to successfully exploiting the vulnerability.",
            o: {
              N: {
                l: "None",
                d: "The attacker is unauthenticated prior to attack, and therefore does not require any access to settings or files of the vulnerable system to carry out an attack."
              },
              L: {
                l: "Low",
                d: "The attacker requires privileges that provide basic capabilities that are typically limited to settings and resources owned by a single low-privileged user. Alternatively, an attacker with Low privileges has the ability to access only non-sensitive resources."
              },
              H: {
                l: "High",
                d: "The attacker requires privileges that provide significant (e.g., administrative) control over the vulnerable system allowing full access to the vulnerable system’s settings and files."
              },
            },
          },
          UI: {
            l: "User Interaction",
            d: "This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable system. This metric determines whether the vulnerability can be exploited solely at the will of the attacker, or whether a separate user (or user-initiated process) must participate in some manner.",
            o: {
              N: {
                l: "None",
                d: "The vulnerable system can be exploited without interaction from any human user, other than the attacker."
              },
              P: {
                l: "Passive",
                d: "Successful exploitation of this vulnerability requires limited interaction by the targeted user with the vulnerable system and the attacker’s payload. These interactions would be considered involuntary and do not require that the user actively subvert protections built into the vulnerable system."
              },
              A: {
                l: "Active",
                d: "Successful exploitation of this vulnerability requires a targeted user to perform specific, conscious interactions with the vulnerable system and the attacker’s payload, or the user’s interactions would actively subvert protection mechanisms which would lead to exploitation of the vulnerability."
              },
            },
          },
        },
      },
      VS: {
        l: "Vulnerable System Impact",
        d: "The Impact metrics capture the effects of a successfully exploited vulnerability. Analysts should constrain impacts to a reasonable, final outcome which they are confident an attacker is able to achieve.",
        c: {
          VC: {
            l: "Confidentiality",
            d: "This metric measures the impact to the confidentiality of the information managed by the system due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of confidentiality, resulting in all information within the Vulnerable System being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact."
              },
              L: {
                l: "Low",
                d: "There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the Vulnerable System."
              },
              N: {
                l: "None",
                d: "There is no loss of confidentiality within the Vulnerable System."
              }
            },
          },
          VI: {
            l: "Integrity",
            d: "This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information. Integrity of a system is impacted when an attacker causes unauthorized modification of system data. Integrity is also impacted when a system user can repudiate critical actions taken in the context of the system (e.g. due to insufficient logging).",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the Vulnerable System. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the Vulnerable System."
              },
              L: {
                l: "Low",
                d: "Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact to the Vulnerable System."
              },
              N: {
                l: "None",
                d: "There is no loss of integrity within the Vulnerable System."
              }
            },
          },
          VA: {
            l: "Availability",
            d: "This metric measures the impact to the availability of the impacted system resulting from a successfully exploited vulnerability.",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the Vulnerable System; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the Vulnerable System."
              },
              L: {
                l: "Low",
                d: "Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the Vulnerable System are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the Vulnerable System."
              },
              N: {
                l: "None",
                d: "There is no impact to availability within the Vulnerable System."
              }
            },
          },
        },
      },
      SS: {
        l: "Subsequent System Impact",
        d: "The Impact metrics capture the effects of a successfully exploited vulnerability. Analysts should constrain impacts to a reasonable, final outcome which they are confident an attacker is able to achieve.",
        c: {
          SC: {
            l: "Confidentiality",
            d: "This metric measures the impact to the confidentiality of the information managed by the system due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of confidentiality, resulting in all resources within the Subsequent System being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact."
              },
              L: {
                l: "Low",
                d: "There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the Subsequent System."
              },
              N: {
                l: "None",
                d: "There is no loss of confidentiality within the Subsequent System or all confidentiality impact is constrained to the Vulnerable System."
              }
            },
          },
          SI: {
            l: "Integrity",
            d: "This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information. Integrity of a system is impacted when an attacker causes unauthorized modification of system data. Integrity is also impacted when a system user can repudiate critical actions taken in the context of the system (e.g. due to insufficient logging).",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the Subsequent System. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the Subsequent System."
              },
              L: {
                l: "Low",
                d: "Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact to the Subsequent System."
              },
              N: {
                l: "None",
                d: "There is no loss of integrity within the Subsequent System or all integrity impact is constrained to the Vulnerable System."
              }
            },
          },
          SA: {
            l: "Availability",
            d: "This metric measures the impact to the availability of the impacted system resulting from a successfully exploited vulnerability.",
            o: {
              H: {
                l: "High",
                d: "There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the Subsequent System; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the Subsequent System."
              },
              L: {
                l: "Low",
                d: "Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the Subsequent System are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the Subsequent System."
              },
              N: {
                l: "None",
                d: "There is no impact to availability within the Subsequent System or all availability impact is constrained to the Vulnerable System."
              }
            },
          },
        },
      },
    },
  },
};

// Taken from https://github.com/FIRSTdotorg/cvss-v4-calculator/blob/main/cvss_lookup.js
cvssLookup_global = {
  "000000": 10,
  "000001": 9.9,
  "000010": 9.8,
  "000011": 9.5,
  "000020": 9.5,
  "000021": 9.2,
  "000100": 10,
  "000101": 9.6,
  "000110": 9.3,
  "000111": 8.7,
  "000120": 9.1,
  "000121": 8.1,
  "000200": 9.3,
  "000201": 9,
  "000210": 8.9,
  "000211": 8,
  "000220": 8.1,
  "000221": 6.8,
  "001000": 9.8,
  "001001": 9.5,
  "001010": 9.5,
  "001011": 9.2,
  "001020": 9,
  "001021": 8.4,
  "001100": 9.3,
  "001101": 9.2,
  "001110": 8.9,
  "001111": 8.1,
  "001120": 8.1,
  "001121": 6.5,
  "001200": 8.8,
  "001201": 8,
  "001210": 7.8,
  "001211": 7,
  "001220": 6.9,
  "001221": 4.8,
  "002001": 9.2,
  "002011": 8.2,
  "002021": 7.2,
  "002101": 7.9,
  "002111": 6.9,
  "002121": 5,
  "002201": 6.9,
  "002211": 5.5,
  "002221": 2.7,
  "010000": 9.9,
  "010001": 9.7,
  "010010": 9.5,
  "010011": 9.2,
  "010020": 9.2,
  "010021": 8.5,
  "010100": 9.5,
  "010101": 9.1,
  "010110": 9,
  "010111": 8.3,
  "010120": 8.4,
  "010121": 7.1,
  "010200": 9.2,
  "010201": 8.1,
  "010210": 8.2,
  "010211": 7.1,
  "010220": 7.2,
  "010221": 5.3,
  "011000": 9.5,
  "011001": 9.3,
  "011010": 9.2,
  "011011": 8.5,
  "011020": 8.5,
  "011021": 7.3,
  "011100": 9.2,
  "011101": 8.2,
  "011110": 8,
  "011111": 7.2,
  "011120": 7,
  "011121": 5.9,
  "011200": 8.4,
  "011201": 7,
  "011210": 7.1,
  "011211": 5.2,
  "011220": 5,
  "011221": 3,
  "012001": 8.6,
  "012011": 7.5,
  "012021": 5.2,
  "012101": 7.1,
  "012111": 5.2,
  "012121": 2.9,
  "012201": 6.3,
  "012211": 2.9,
  "012221": 1.7,
  "100000": 9.8,
  "100001": 9.5,
  "100010": 9.4,
  "100011": 8.7,
  "100020": 9.1,
  "100021": 8.1,
  "100100": 9.4,
  "100101": 8.9,
  "100110": 8.6,
  "100111": 7.4,
  "100120": 7.7,
  "100121": 6.4,
  "100200": 8.7,
  "100201": 7.5,
  "100210": 7.4,
  "100211": 6.3,
  "100220": 6.3,
  "100221": 4.9,
  "101000": 9.4,
  "101001": 8.9,
  "101010": 8.8,
  "101011": 7.7,
  "101020": 7.6,
  "101021": 6.7,
  "101100": 8.6,
  "101101": 7.6,
  "101110": 7.4,
  "101111": 5.8,
  "101120": 5.9,
  "101121": 5,
  "101200": 7.2,
  "101201": 5.7,
  "101210": 5.7,
  "101211": 5.2,
  "101220": 5.2,
  "101221": 2.5,
  "102001": 8.3,
  "102011": 7,
  "102021": 5.4,
  "102101": 6.5,
  "102111": 5.8,
  "102121": 2.6,
  "102201": 5.3,
  "102211": 2.1,
  "102221": 1.3,
  "110000": 9.5,
  "110001": 9,
  "110010": 8.8,
  "110011": 7.6,
  "110020": 7.6,
  "110021": 7,
  "110100": 9,
  "110101": 7.7,
  "110110": 7.5,
  "110111": 6.2,
  "110120": 6.1,
  "110121": 5.3,
  "110200": 7.7,
  "110201": 6.6,
  "110210": 6.8,
  "110211": 5.9,
  "110220": 5.2,
  "110221": 3,
  "111000": 8.9,
  "111001": 7.8,
  "111010": 7.6,
  "111011": 6.7,
  "111020": 6.2,
  "111021": 5.8,
  "111100": 7.4,
  "111101": 5.9,
  "111110": 5.7,
  "111111": 5.7,
  "111120": 4.7,
  "111121": 2.3,
  "111200": 6.1,
  "111201": 5.2,
  "111210": 5.7,
  "111211": 2.9,
  "111220": 2.4,
  "111221": 1.6,
  "112001": 7.1,
  "112011": 5.9,
  "112021": 3,
  "112101": 5.8,
  "112111": 2.6,
  "112121": 1.5,
  "112201": 2.3,
  "112211": 1.3,
  "112221": 0.6,
  "200000": 9.3,
  "200001": 8.7,
  "200010": 8.6,
  "200011": 7.2,
  "200020": 7.5,
  "200021": 5.8,
  "200100": 8.6,
  "200101": 7.4,
  "200110": 7.4,
  "200111": 6.1,
  "200120": 5.6,
  "200121": 3.4,
  "200200": 7,
  "200201": 5.4,
  "200210": 5.2,
  "200211": 4,
  "200220": 4,
  "200221": 2.2,
  "201000": 8.5,
  "201001": 7.5,
  "201010": 7.4,
  "201011": 5.5,
  "201020": 6.2,
  "201021": 5.1,
  "201100": 7.2,
  "201101": 5.7,
  "201110": 5.5,
  "201111": 4.1,
  "201120": 4.6,
  "201121": 1.9,
  "201200": 5.3,
  "201201": 3.6,
  "201210": 3.4,
  "201211": 1.9,
  "201220": 1.9,
  "201221": 0.8,
  "202001": 6.4,
  "202011": 5.1,
  "202021": 2,
  "202101": 4.7,
  "202111": 2.1,
  "202121": 1.1,
  "202201": 2.4,
  "202211": 0.9,
  "202221": 0.4,
  "210000": 8.8,
  "210001": 7.5,
  "210010": 7.3,
  "210011": 5.3,
  "210020": 6,
  "210021": 5,
  "210100": 7.3,
  "210101": 5.5,
  "210110": 5.9,
  "210111": 4,
  "210120": 4.1,
  "210121": 2,
  "210200": 5.4,
  "210201": 4.3,
  "210210": 4.5,
  "210211": 2.2,
  "210220": 2,
  "210221": 1.1,
  "211000": 7.5,
  "211001": 5.5,
  "211010": 5.8,
  "211011": 4.5,
  "211020": 4,
  "211021": 2.1,
  "211100": 6.1,
  "211101": 5.1,
  "211110": 4.8,
  "211111": 1.8,
  "211120": 2,
  "211121": 0.9,
  "211200": 4.6,
  "211201": 1.8,
  "211210": 1.7,
  "211211": 0.7,
  "211220": 0.8,
  "211221": 0.2,
  "212001": 5.3,
  "212011": 2.4,
  "212021": 1.4,
  "212101": 2.4,
  "212111": 1.2,
  "212121": 0.5,
  "212201": 1,
  "212211": 0.3,
  "212221": 0.1,
};

var calculate = (hash) => {
  mandatory = ["AV", "AC", "AT", "PR", "UI", "VC", "VI", "VA", "SC", "SI", "SA"];
  for (var i in mandatory) {
    if (hash[mandatory[i]] == undefined) {
      return "";
    }
  }

  var AV = hash["AV"];
  var AC = hash["AC"];
  var AT = hash["AT"];
  var PR = hash["PR"];
  var UI = hash["UI"];
  var VC = hash["VC"];
  var VI = hash["VI"];
  var VA = hash["VA"];
  var SC = hash["SC"];
  var SI = hash["SI"];
  var SA = hash["SA"];

  var eq1 = () => {
    if (AV == "N" && PR == "N" && UI == "N") { return 0; }
    if ((AV == "N" || PR == "N" || UI == "N") && AV != "P") { return 1; }
    if (AV == "P" || !(AV == "N" || PR == "N" || UI == "N")) { return 2; }
  };
  var eq2 = () => {
    if (AC == "L" && AT == "N") { return 0; };
    return 1;
  };
  var eq3 = () => {
    if (VC == "H" && VI == "H") { return 0; }
    if (VC == "H" || VI == "H" || VA == "H") { return 1; }
    return 2;
  };
  var eq4 = () => {
    if (SC == "H" && SI == "H" && SA == "H") {return 1;}
    return 2;
  };
  var eq5 = () => {
    return 0;
  };
  var eq6 = () => {
    return 1;
  };

  var n = '' + eq1() + eq2() + eq3() + eq4() + eq5() + eq6();
  console.log(n);
  var result = cvssLookup_global[n];
  console.log(result);
  return result;
};
