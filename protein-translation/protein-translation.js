// Translate RNA sequences into proteins.
// RNA: "AUGUUUUCU" => translates to
// Codons: "AUG", "UUU", "UCU" => which become a polypeptide with the following sequence =>
// Protein: "Methionine", "Phenylalanine", "Serine"

export default function translate(rnaStrand) {
  let proteinMap = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };
  const toProtein = codon => proteinMap[codon] || 'INVALID';
  const proteins = [];

  if (rnaStrand) {
    for (let i = 0; i < rnaStrand.length; i += 3) {
      const protein = toProtein(rnaStrand.substring(i, i + 3));

      if (protein) {
        if (protein === 'STOP') {
          break;
        }

        if (protein === 'INVALID') {
          throw new Error('Invalid codon');
        }
        proteins.push(protein);
      }
    }
  }

  return proteins;
}