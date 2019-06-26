# Capitalize Cases Except Functional Words, such as the Ones in the Array to Be Skipped
module CapitalizeCases
    def capitalize_initial_letters(sentence)
        words_to_skip   = ["a", "al", "and", "as", "by", "de", "for", "in", "of", "or", "such", "that","the", "to", "vs", "with"]
        split_sentence  = sentence.split(" ")

        capped_cased    = split_sentence.each_with_index.map do |word, index|
            if ((words_to_skip.include?(word)) && (index > 0))
                word
            else
                word.capitalize
            end
        end

        capped_cased.join(" ")
    end
end

Liquid::Template.register_filter(CapitalizeCases)